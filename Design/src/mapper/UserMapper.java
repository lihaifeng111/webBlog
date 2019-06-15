package mapper;

import java.util.List;

import bean.User;

public interface UserMapper {

	/**
	 * 
	 * @Description �����û�����
	 * @param user
	 * @return Ӱ�����ݿ���Ŀ��
	 */
	int saveUser(User user);
	
	
	/**
	 * 
	* @Description: �����û�idɾ���û�
	* @param id
	* @return  Ӱ�����ݿ���Ŀ��
	 */
	int deleteUser(int id);
	
	
	/**
	 * 
	* @Description: �����û�id���в����û�
	* @param id
	* @return  ���ҵ����û�
	 */
	User findUserByUsername(String username);
	
	
	/**
	 * 
	* @Description: ���������û���Ϣ
	* @return �����û�
	 */
	List<User> findAllUser();
	
	
	/**
	 * 
	* @Description: �����û�������Ϣ�޸�
	* @param user
	* @return Ӱ�����ݿ���Ŀ��
	 */
	int updateUser(User user);
	

	/**
	 * 
	* @Description: �����û�id�����û���Ϣ
	* @param id
	* @return User
	 */
	User findUserById(int id);
	

}
