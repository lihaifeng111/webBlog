package interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import bean.User;

public class Logininterceptor implements HandlerInterceptor {

	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		
	}

	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		
	}

	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2) throws Exception {
		//1.获取session
		HttpSession session = request.getSession();
		//2.判断session对象的里面的user是否存在
		User user=(User) session.getAttribute("user");
		if(user==null){
			//未登陆状态,页面跳转到登陆界面
			response.sendRedirect("login.html");
			return false ;
		}
		//用户登陆状态,正常执行
		return true ; //大多数情况是返回true
	}

}
