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
		//1.��ȡsession
		HttpSession session = request.getSession();
		//2.�ж�session����������user�Ƿ����
		User user=(User) session.getAttribute("user");
		if(user==null){
			//δ��½״̬,ҳ����ת����½����
			response.sendRedirect("login.html");
			return false ;
		}
		//�û���½״̬,����ִ��
		return true ; //���������Ƿ���true
	}

}
