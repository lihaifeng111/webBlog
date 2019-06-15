package service;

import java.util.List;

import mapper.MessageMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.Message;

@Service
public class MessageServiceImpl implements MessageService{
    @Autowired
	private MessageMapper messageMapper;
	public int deleteMessage(int id) {
		return messageMapper.deleteMessage(id);
	}

	public List<Message> findAllMessage() {
		return messageMapper.findAllMessage();
	}

	public int saveMessage(Message message) {
		return messageMapper.saveMessage(message);
	}

}
