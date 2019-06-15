package service;

import java.util.List;

import mapper.ArticleMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bean.Article;
@Service
public class ArticleServiceImpl implements ArticleService{

	@Autowired
	private ArticleMapper articleMapper;
	public int deleteArticle(int id) {
		return articleMapper.deleteArticle(id);
	}

	public List<Article> findAllArticle() {
		return articleMapper.findAllArticle();
	}

	public Article findArticleByName(String articleName) {
		return articleMapper.findArticleByName(articleName);
	}

	public int saveArticle(Article art) {
		return articleMapper.saveArticle(art);
	}

	public List<Article> findArticleByType(String type) {
		return articleMapper.findArticleByType(type);
	}

	public Article findArticleById(int id) {
		return articleMapper.findArticleById(id);
	}



}
