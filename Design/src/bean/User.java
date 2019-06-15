package bean;
/**
 * 用户实体类
 * @author LHF
 *
 */
public class User {

	private int id;
	private String username;
	private String password;
	private String email;
	private int level;
	private String picture;
	
	public User(String username, String password, String email, int level,String picture) {
		this.username = username;
		this.password = password;
		this.email = email;
		this.level = level;
		this.picture=picture;
	}

	public User() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	
	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	
	

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
	
	@Override
	public String toString() {
		return "User [email=" + email + ", id=" + id + ", level=" + level
				+ ", password=" + password + ", picture=" + picture
				+ ", username=" + username + "]";
	}

	@Override
	public int hashCode() {
		return id;
	}
	
	@Override
	public boolean equals(Object obj) {
		if(obj==null) return false;
		if(obj==this) return true;
		if(obj instanceof User) {
			User u = (User) obj;
			return u.id==this.id&&u.username==this.username
			  &&u.password==this.password&&u.email==this.email&&u.level==this.level&&u.picture==this.picture;
		}
		return false;
	}
	
}
