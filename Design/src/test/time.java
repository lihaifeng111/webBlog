package test;

import java.text.SimpleDateFormat;
import java.util.Date;

public class time {
     public static void main(String[] args) {
    	 SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd HH:mm");//�󶨵ĸ�ʽ
		  //���ڵĸ�ʽ��
			String now=sdf.format(new Date());
			System.out.println(now);

	}
}
