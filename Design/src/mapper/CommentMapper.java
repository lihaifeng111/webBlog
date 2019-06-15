package mapper;

import java.util.List;

import bean.Comment;

public interface CommentMapper {

	/**
	 * �������
	 * @param comment
	 * @return
	 */
	public int saveComment(Comment comment);
	
	/**
	 * ɾ������
	 * @param id
	 * @return
	 */
	public int deleteComment(int id);
	
	/**
	 * ��ѯ��������
	 * @param id
	 * @return
	 */
	public Comment findCommentById(int id);
	
	/**
	 * ��ѯ��������
	 * @param articleId
	 * @return
	 */
	public List<Comment> findAllComment(int articleId);
}
