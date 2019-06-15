package mapper;

import java.util.List;

import bean.Comment;

public interface CommentMapper {

	/**
	 * 添加评论
	 * @param comment
	 * @return
	 */
	public int saveComment(Comment comment);
	
	/**
	 * 删除评论
	 * @param id
	 * @return
	 */
	public int deleteComment(int id);
	
	/**
	 * 查询单个评论
	 * @param id
	 * @return
	 */
	public Comment findCommentById(int id);
	
	/**
	 * 查询所有评论
	 * @param articleId
	 * @return
	 */
	public List<Comment> findAllComment(int articleId);
}
