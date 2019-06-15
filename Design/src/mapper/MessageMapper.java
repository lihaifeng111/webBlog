package mapper;

import java.util.List;

import bean.Message;

public interface MessageMapper {
	/**
	 * Ìí¼ÓÁôÑÔ
	 * @param message
	 * @return
	 */
	int saveMessage(Message message);
	
	/**
	 * É¾³ıÁôÑÔ
	 * @param id
	 * @return
	 */
	int deleteMessage(int id);
	
	/**
	 * ²éÑ¯ËùÓĞÁôÑÔ
	 * @return
	 */
	List<Message> findAllMessage();
}
