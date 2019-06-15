package bean;
/**
 * 管理员发表的文章
 * @author LHF
 *
 */
public class Article {
    private int id;
    private String articleName;
    private String title;
    private String text;
    private int userId;
    private String picture;
    private String time;
    
	public Article(String articleName, String title, String text, int userId,
			String picture, String time) {
		this.articleName = articleName;
		this.title = title;
		this.text = text;
		this.userId = userId;
		this.picture = picture;
		this.time = time;
	}

	public Article() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getArticleName() {
		return articleName;
	}

	public void setArticleName(String articleName) {
		this.articleName = articleName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Article [articleName=" + articleName + ", id=" + id
				+ ", picture=" + picture + ", text=" + text + ", time=" + time
				+ ", title=" + title + ", userId=" + userId + "]";
	}

	@Override
	public int hashCode() {
		return id;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(obj==null) return false;
		if(obj==this) return true;
		if(obj instanceof Article) {
			Article a = (Article) obj;
			return a.id==this.id&&a.articleName==this.articleName&&a.title==this.title&&a.userId==
				this.userId&&a.picture==this.picture&&a.text==this.text&&a.time==this.time;
		}
		return false;
	}
	
   
    
    
}
