package service;

import java.util.List;

import bean.Article;

public interface ArticleService {
   
	/**
	 * 添加文章
	 */
	int saveArticle(Article art);
	
	/**
	 * 删除文章
	 * @param id
	 * @return
	 */
	int deleteArticle(int id);
    
	/**
	 * 查询文章
	 * @param name
	 * @return
	 */
	Article findArticleByName(String articleName);
	
	Article findArticleById(int id);
	
	/**
	 * 查询文章
	 * @param type
	 * @return
	 */
	List<Article> findArticleByType(String type);
	
	/**
	 * 查询所有
	 * @return
	 */
	List<Article> findAllArticle();
}
