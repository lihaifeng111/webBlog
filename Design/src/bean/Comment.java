package bean;
/**
 * ”√ªß∆¿¬€
 * @author LHF
 *
 */
public class Comment {
    private int id;
    private String userName;
    private String time;
    private int articleId;
    private String content;
    
	public Comment(String userName, String time, int articleId, String content) {
		this.userName = userName;
		this.time = time;
		this.articleId = articleId;
		this.content = content;
	}
	public Comment() {
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public int getArticleId() {
		return articleId;
	}
	public void setArticleId(int articleId) {
		this.articleId = articleId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "Comment [articleId=" + articleId + ", content=" + content
				+ ", id=" + id + ", time=" + time + ", userName=" + userName + "]";
	}
	
	@Override
	public int hashCode() {
		return id;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(obj==null) return false;
		if(obj==this) return true;
		if(obj instanceof Comment) {
			Comment c = (Comment) obj;
			return c.id==this.id&&c.articleId==this.articleId&&c.content==this.content
			&&c.time==this.time&&c.userName==this.userName;
		}
		return false;
	}
	
	
    
    
}
