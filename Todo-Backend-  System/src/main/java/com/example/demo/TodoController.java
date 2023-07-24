package com.example.demo;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/user")
public class TodoController {
	
	@Autowired
	private TodoRepository todoRepository;
	
	@PostMapping("/todos/{userId}")
	 public Todo createTodo(@RequestBody TodoDTO t , @PathVariable Long userId) {
		Todo todo = new Todo(t.getId() , t.getTitle() , t.getDescription() , t.isCompleted() , t.isImportant() , userId);
        return todoRepository.save(todo);
    }
	 @GetMapping("/todos/{userId}")
	    public List<Todo> getAllTodos(@PathVariable Long userId) {
	        return todoRepository.findAll().stream()
	                .filter(todo -> todo.getUserId() == userId)
	                .collect(Collectors.toList());
	  }
	 @GetMapping("/todo/{id}")
	    public Todo getTodo(@PathVariable Long id) {
		 return todoRepository.findById(id).orElseThrow(()-> new TodoNotFoundException(id));
	  }
	 @PutMapping("/todos/{id}")
	 public Todo updatetask(@RequestBody Todo newtodo , @PathVariable Long id) {
		 	return todoRepository.findById(id)
		 			.map(todo ->{
		 				todo.setTitle(newtodo.getTitle());
		 				todo.setDescription(newtodo.getDescription());
		 				todo.setImportant(newtodo.isImportant());
		 				return todoRepository.save(todo);
		 			}).orElseThrow(()-> new TodoNotFoundException(id));	
	 }
	 @PutMapping("/todos/mark/{id}")
	 public Todo updatetask1(@PathVariable Long id) {
		 Todo change = todoRepository.findById(id).orElse(new Todo());
		 change.setCompleted(true);
		 return todoRepository.save(change);
	 }
	 
	 @DeleteMapping("/todos/{id}")
	 String deleteTodo(@PathVariable Long id) {
		 if(!todoRepository.existsById(id)) {
			 throw new TodoNotFoundException(id);
		 }
		 todoRepository.deleteById(id);
		 return  "task deleted sucessfully";
	 }
	 
}







