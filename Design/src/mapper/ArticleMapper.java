package mapper;

import java.util.List;

import bean.Article;

public interface ArticleMapper {
   
	/**
	 * �������
	 */
	int saveArticle(Article art);
	
	/**
	 * ɾ������
	 * @param id
	 * @return
	 */
	int deleteArticle(int id);
    
	/**
	 * ��ѯ����
	 * @param name
	 * @return
	 */
	Article findArticleByName(String articleName);
	
	Article findArticleById(int id);

	
	/**
	 * ��ѯ����
	 * @param type
	 * @return
	 */
	List<Article> findArticleByType(String type);
	
	/**
	 * ��ѯ����
	 * @return
	 */
	List<Article> findAllArticle();
}
