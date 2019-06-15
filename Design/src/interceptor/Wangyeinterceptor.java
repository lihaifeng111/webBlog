package interceptor;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import bean.User;

public class Wangyeinterceptor implements HandlerInterceptor{
	
	//放行某些请求
	private List<String> allowedPass;
	public void setAllowedPass(List<String> allowedPass) {
		this.allowedPass = allowedPass;
	}
	
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2) throws Exception {
		
		//获取页面发送的请求
		String uri = request.getRequestURI();
		uri=uri.substring(uri.lastIndexOf("/")+1,uri.lastIndexOf("."));
		System.out.println(uri);
		//指定部分请求属于放行的请求(允许通过的请求,不去拦截)
		for (String list : allowedPass) {
			if(uri.equals(list)){
				return true;
			}
		}
		//不在范围内，开始拦截
		
		//获取session
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		//2.判断session对象的里面的user是否存在
		if(user==null){
			//未登陆状态,页面跳转到登陆界面
//			session.setAttribute("map","登陆失败!!!");
			response.sendRedirect("login.html");
			return false ;
		}
		//用户登陆状态,正常执行
		return true ; //大多数情况是返回true
	}
	

	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		
	}

	
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		
	}

	
	

}
