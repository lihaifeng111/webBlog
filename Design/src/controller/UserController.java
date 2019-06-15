package controller;

import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import service.UserService;

import bean.User;

@Controller
public class UserController {
	@Autowired
	private UserService userService;
	@RequestMapping("/regist")
	public String regist(User user,HttpServletRequest request,HttpSession session){
		user.setLevel(1);
		user.setPicture(null);
		if ((user.getUsername()=="")||(user.getEmail()=="")||(user.getPassword()=="")){
			return "redirect:regist.html";
		}
		int result=userService.saveUser(user);
		if(result==1){
			return "redirect:login.html";
		}
		else
		{
		return "redirect:regist.html";
		}
	}
	@RequestMapping("/login")
	public String login(User user,HttpServletRequest request,HttpServletResponse response,HttpSession session) {
		
		if ((user.getPassword()=="")||(user.getUsername()=="")){
			return "redirect:login.html";
		}
	     User u=userService.findUserByUsername(user.getUsername());
	     if (u.getPassword().equals(user.getPassword())){
	    	 session.setAttribute("user", u);
	    	 return "redirect:index.html";
	     }else{
	    	 return "redirect:login.html";
	     }
		
	}
	
	/**
	 * ע��ʱ����û���
	 * @param nickname
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping("/nickname")
	public void checkUsername(String nickname, HttpServletResponse response)
	throws Exception{
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		User user = userService.findUserByUsername(nickname);
		if (user == null) {
			out.println(1);
		} else {
			out.println(0);
		}
		out.close();
	}
	
	/**
	 * ���loginҳ����û�������
	 * @param nickname
	 * @param password
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping("/password")
	public void checkPassword(String nickname,String password, HttpServletResponse response)
	throws Exception{
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		User u = userService.findUserByUsername(nickname);
	    if (u==null){
	    	out.println(0);
	    }
		if (u.getPassword().equals(password)){
			out.println(1);
		}else{
			out.println(0);
		}
		out.close();
	}
	
	@RequestMapping("/selectUserData")
	@ResponseBody
	public User getUserData(HttpSession session){
		User user=(User)session.getAttribute("user");
		if (user==null){
			return null;
		}else{
			User u=userService.findUserByUsername(user.getUsername());
			return u;
		}
	}
	
	/**
	 * ��������Ա���������û�
	 * @return
	 */
	@RequestMapping("/allUser")
	@ResponseBody
	public List<User>getAllUser(){
		return userService.findAllUser();
	}
	
	/**
	 * ͨ���û�idɾ���û�����
	 * @param id
	 * @param response
	 */
	@RequestMapping("/deleteUserById")
	public void deleteUser(int id,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		int res=userService.deleteUser(id);
	}
	
	@RequestMapping("/updateUserById")
	@ResponseBody
	public int updateUserById(int id,HttpServletResponse response){
		response.setHeader("Access-Control-Allow-Origin", "*");
		User u=userService.findUserById(id);
		if (u.getLevel()==3){
			return 0;
		}else{
			u.setLevel(u.getLevel()+1);
			userService.updateUser(u);
			return 1;
		}
	}
	
	/**
	 * ��¼������
	 */
	@RequestMapping("/leacots")
	public String message(){
		return "redirect:leacots.html";
	}
	
	@RequestMapping("/new")
	public String newArticle(HttpSession session){
		User user=(User)session.getAttribute("user");
		if(user.getLevel()>1){
			return "redirect:new.html";
		}else{
			return "redirect:index.html";
		}
	}
	
	@RequestMapping("/about")
	public String center(){
		return "redirect:about.html";
	}
	
	
	/**
	 * ��������Ա���£��û��Ĺ���
	 */
	@RequestMapping("/articleList")
	public String articleList(HttpSession session){
		User user=(User)session.getAttribute("user");
		if(user.getLevel()>2){
			return "redirect:articleList.html";
		}else{
			return "redirect:about.html";
		}
	}
	
	@RequestMapping("/userList")
	public String userList(HttpSession session){
		User user=(User)session.getAttribute("user");
		if(user.getLevel()>2){
			return "redirect:userList.html";
		}else{
			return "redirect:about.html";
		}
	}
	
	/**
	 * ע��
	 */
	@RequestMapping("/restart")
	public String restart(HttpSession session){
		session.removeAttribute("user");
		return "redirect:login.html";
	}
	
	/**
	 * ����Ա�����û�����
	 */
	
	@RequestMapping("/findUser")
	@ResponseBody
	public List<User> findUser(String data){
	    List<User> list=new LinkedList<User>();
	    if (data==""){
	    	return list;
	    }
		User u=userService.findUserByUsername(data);
		if (u!=null){
			list.add(u);
		}
		
		for (int x = 0; x < data.length(); x++) {
			if (data.charAt(x)>='0' && data.charAt(x)<='9'){
				continue;
			 }else{
				 return list;
			 }
		}
		int id=Integer.parseInt(data);
		User u2=userService.findUserById(id);
		if (u2!=null){
			if (u.equals(u2)){
				return list;
			}else{
				list.add(u2);
			}
			
		}
		return list;
		
	}
}


