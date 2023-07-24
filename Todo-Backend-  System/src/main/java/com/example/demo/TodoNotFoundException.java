package com.example.demo;

@SuppressWarnings("serial")
public class TodoNotFoundException extends RuntimeException{


	public TodoNotFoundException(Long id) {
		// TODO Auto-generated constructor stub
		super("could not find task with the id"+id);
	}

}
