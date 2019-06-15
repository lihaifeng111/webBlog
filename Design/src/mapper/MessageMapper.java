package mapper;

import java.util.List;

import bean.Message;

public interface MessageMapper {
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
