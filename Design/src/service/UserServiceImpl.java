package service;

import java.util.List;

import mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.User;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper userMapper;
	public int deleteUser(int id) {
		int result=userMapper.deleteUser(id);
		return result;
	}

	public List<User> findAllUser() {
		List<User> users=userMapper.findAllUser();
		return users;
	}

	public User findUserByUsername(String username) {
		User user=userMapper.findUserByUsername(username);
		return user;
	}

	public int saveUser(User user) {
		int result = userMapper.saveUser(user);
		return result;
	}

	public User findUserById(int id) {
		User user=userMapper.findUserById(id);
		return user;
	}

	public int updateUser(User user) {
		int result=userMapper.updateUser(user);
		return result;
	}



}
