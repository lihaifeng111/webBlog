package service;

import java.util.List;

import mapper.CommentMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.Comment;

@Service
public class CommentServiceImpl implements CommentService{
    @Autowired
	private CommentMapper commentMapper; 
	public int deleteComment(int id) {
		return commentMapper.deleteComment(id);
	}

	public List<Comment> findAllComment(int articleId) {
		return commentMapper.findAllComment(articleId);
	}

	public Comment findCommentById(int id) {
		return commentMapper.findCommentById(id);
	}

	public int saveComment(Comment comment) {
		return commentMapper.saveComment(comment);
	}

}
