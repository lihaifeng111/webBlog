package mapper;

import java.util.List;

import bean.User;

public interface UserMapper {

	/**
	 * 
	 * @Description 插入用户数据
	 * @param user
	 * @return 影响数据库条目数
	 */
	int saveUser(User user);
	
	
	/**
	 * 
	* @Description: 根据用户id删除用户
	* @param id
	* @return  影响数据库条目数
	 */
	int deleteUser(int id);
	
	
	/**
	 * 
	* @Description: 根据用户id进行查找用户
	* @param id
	* @return  查找到的用户
	 */
	User findUserByUsername(String username);
	
	
	/**
	 * 
	* @Description: 查找所有用户信息
	* @return 所有用户
	 */
	List<User> findAllUser();
	
	
	/**
	 * 
	* @Description: 根据用户进行信息修改
	* @param user
	* @return 影响数据库条目数
	 */
	int updateUser(User user);
	

	/**
	 * 
	* @Description: 根据用户id返回用户信息
	* @param id
	* @return User
	 */
	User findUserById(int id);
	

}
