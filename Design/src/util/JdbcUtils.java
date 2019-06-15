package util;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**JDBC������ķ�װ */
/**
 * @author 
 *
 */
public class JdbcUtils {
	//Properties:��Java����ר���ṩ�������������ļ�����
    private static Properties pro=new Properties();
	private static String driverClass;
	private static String url;
	private static String user;
	private static String password;
	/**����ص�ʱ��ִ��(ִֻ��һ��) */
	static{
		try {
			//���������ļ�(ָ�������ļ���·��),�����ļ����ݶȱ����ص�pro��������
			pro.load(JdbcUtils.class.getClassLoader().getResourceAsStream("db.properties"));
		    
			//��ȡdriverClass,url,user,password
			driverClass = pro.getProperty("driverClass");
			url = pro.getProperty("url");
			user = pro.getProperty("user");
			password = pro.getProperty("password");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	/**��ȡ����conn */
	public static Connection getConnection(){
		Connection conn=null;
		try {//��������
			Class.forName(driverClass);
			//ͨ��������������ȡ����
			conn = DriverManager.getConnection(url,user,password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
	/**�ر����ӽ����ResultSet */
	public static void close(ResultSet rs){
		try {
			if(rs!=null)
			  rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	/**�ر�����Statement */
	public static void close(Statement state){
		try {
			if(state!=null)
			  state.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	/**�ر�����Connection */
	public static void close(Connection conn){
		try {
			if(conn!=null)
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
