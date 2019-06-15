package controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import bean.Comment;
import bean.User;

import service.CommentService;

@Controller
public class CommentController {
    @Autowired
    private CommentService commentService;
    
    /**
     * 通过文章id查询评论
     * @param articleId
     * @return
     */
    @RequestMapping("/selectCommentByArticleId")
    @ResponseBody
    public List<Comment> selectCommentByArticleid(int id,HttpServletResponse response){
    	response.setHeader("Access-Control-Allow-Origin", "*");
    	return commentService.findAllComment(id);
    }
    
    @RequestMapping("/addComment")
    @ResponseBody
    public String addComment(int id,String con,HttpSession session,HttpServletResponse response){
    	//@RequestParam("articleId") String arti,@RequestParam("content")
    	response.setHeader("Access-Control-Allow-Origin", "*");
    	SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//绑定的格式
		  //日期的格式化
			String now=sdf.format(new Date());
			Comment comment=new Comment();
			comment.setTime(now);
			User user=(User)session.getAttribute("user");
			if (user==null){
				return "redirect:login.html";
			}
			comment.setUserName(user.getUsername());
			comment.setContent(con);
			comment.setArticleId(id);
            int result=commentService.saveComment(comment);
            if (result==1){
            	return "";	
            }else{
            	return "redirect:login.html";
            } 
    }
    
    /**
     * 管理员删除评论通过id
     * @param id
     * @param response
     * @param session
     * @return
     */
    @RequestMapping("/deleteCommentById")
    @ResponseBody
    public int deleteComment(int id,HttpServletResponse response,HttpSession session) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		User user=(User)session.getAttribute("user");
		if(user.getLevel()>=2){
			int res=commentService.deleteComment(id);
			if (res==1){
				return 1;
			}else{
				return 0;
			}
		}else{
			return 0;
		}
		
	}

}
