package service;

import java.util.List;

import bean.Message;

public interface MessageService {
   
	/**
	 * �������
	 * @param message
	 * @return
	 */
	int saveMessage(Message message);
	
	/**
	 * ɾ������
	 * @param id
	 * @return
	 */
	int deleteMessage(int id);
	
	/**
	 * ��ѯ��������
	 * @return
	 */
	List<Message> findAllMessage();
}
