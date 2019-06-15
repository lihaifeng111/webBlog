package interceptor;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import bean.User;

public class Wangyeinterceptor implements HandlerInterceptor{
	
	//����ĳЩ����
	private List<String> allowedPass;
	public void setAllowedPass(List<String> allowedPass) {
		this.allowedPass = allowedPass;
	}
	
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2) throws Exception {
		
		//��ȡҳ�淢�͵�����
		String uri = request.getRequestURI();
		uri=uri.substring(uri.lastIndexOf("/")+1,uri.lastIndexOf("."));
		System.out.println(uri);
		//ָ�������������ڷ��е�����(����ͨ��������,��ȥ����)
		for (String list : allowedPass) {
			if(uri.equals(list)){
				return true;
			}
		}
		//���ڷ�Χ�ڣ���ʼ����
		
		//��ȡsession
		HttpSession session = request.getSession();
		User user=(User)session.getAttribute("user");
		//2.�ж�session����������user�Ƿ����
		if(user==null){
			//δ��½״̬,ҳ����ת����½����
//			session.setAttribute("map","��½ʧ��!!!");
			response.sendRedirect("login.html");
			return false ;
		}
		//�û���½״̬,����ִ��
		return true ; //���������Ƿ���true
	}
	

	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		
	}

	
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		
	}

	
	

}
