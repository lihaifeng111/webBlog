package bean;
/**
 * ”√ªß¡Ù—‘
 * @author LHF
 *
 */
public class Message {
     private int id;
     private String userName;
     private String content;
     private String time;
	
     
	public Message(String userName, String content, String time) {
		this.userName = userName;
		this.content = content;
		this.time = time;
	}

	public Message() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
     
	
     public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Override
    public int hashCode() {
    	return id;
    }        
     
     @Override
 	public boolean equals(Object obj) {
 		if(obj==null) return false;
 		if(obj==this) return true;
 		if(obj instanceof Message) {
 			Message m = (Message) obj;
 			return m.id==this.id&&m.content==this.content&&m.time==this.time&&m.userName==this.userName ;
 		}
 		return false;
 	} 
}
