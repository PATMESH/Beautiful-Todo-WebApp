package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Todo")
public class Todo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String title;
    private String description;
    private boolean completed;
    private boolean important;
    private long userId;
	public Todo(long id2, String title2, String description2, boolean completed2, boolean important2, long id3) {
		this.id = id2;
		this.title = title2;
		this.description = description2;
		this.completed = completed2;
		this.important = important2;
		this.userId = id3;
	}
	public Todo() {
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public boolean isCompleted() {
		return completed;
	}
	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
	public boolean isImportant() {
		return important;
	}
	public void setImportant(boolean important) {
		this.important = important;
	}
	public long getUserId() {
		return userId;
	}
	public void setUser_id(long user_id) {
		this.userId = user_id;
	}
	
}
