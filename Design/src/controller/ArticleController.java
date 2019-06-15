package controller;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import bean.Article;
import bean.User;

import service.ArticleService;


@Controller
public class ArticleController {
	@Autowired
	private ArticleService articleService;
	
	@RequestMapping("/saveArticle")
	public String addArticle(Article article,HttpServletRequest request,HttpSession session,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setCharacterEncoding("utf-8");
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//绑定的格式
		  //日期的格式化
			String now=sdf.format(new Date());
			article.setTime(now);
			User user=(User)session.getAttribute("user");
			if (user==null){
				return "redirect:login.html";
			}
			article.setUserId(user.getId());
			int i=articleService.saveArticle(article);
			if (i==1){
				return "redirect:index.html";
			}else{
				return "redirect:new.html";
			}
		
	} 
	
	/**
	 * 验证添加文章时文章名
	 */
	@RequestMapping("/checkArticleTitle")
	public void checkTitle(String articleName,HttpServletResponse response)throws Exception{
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		Article article=articleService.findArticleByName(articleName);
		if (article==null){
			out.println(0);
		}else{
			out.println(1);
		}
	}
	
	/**
	 * 查询所有的文章
	 */
	@RequestMapping("/selectAllArticle")
	@ResponseBody
	public List<Article> selectAll(HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		return articleService.findAllArticle();
	}
	
	/**
	 * 通过id查询单个文章
	 * @param id
	 * @return
	 */
	@RequestMapping("/selectArticle")
	@ResponseBody
	public Article selectArticleById(int id,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		return articleService.findArticleById(id);
	}
	
	@RequestMapping("/selectType")
	@ResponseBody
	public List<Article> selectArticleByType(String type,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		if(type.equals("all")){
			return articleService.findAllArticle();
		}else{
			return articleService.findArticleByType(type);
		}
	}
	
	/**
	 * 通过文章id删除文章
	 * @param id
	 * @param response
	 * @return
	 */
	@RequestMapping("/deleteArticleById")
	@ResponseBody
	public int deleteArticle(int id,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		int res=articleService.deleteArticle(id);
		if (res==1){
			return 0;
		}else{
			return 1;
		}
	}
	/**
	 * 文章管理界面搜索单个文章
	 */
	@RequestMapping("/findArticle")
	@ResponseBody
	public Article findArticle(String data,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		if (data==""){
			return null;
		}
		Article ar=articleService.findArticleByName(data);
		if (ar==null){
			return null;
		}else{
			return ar;
		}
		
	}
}
