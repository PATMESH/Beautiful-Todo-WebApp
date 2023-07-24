package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/user")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@PostMapping(path="/save")
	public String saveUser(@RequestBody UserDTO userDTO) {
		User user;
		user = new User(
		        userDTO.getUserid(),
		        userDTO.getUserName(),
		        userDTO.getEmail(),
		        userDTO.getPassword()
		);
		userRepository.save(user);

    return user.getUserName();
	}
	@GetMapping(path="/name/{email}")
	public User getUserName(@PathVariable String email) {
		return userRepository.findByEmail(email);
	}
	
	@PostMapping(path="/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
		User employee1 = userRepository.findByEmail(loginDTO.getEmail());
		LoginMessage loginMessage;
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String savedPassword = employee1.getPassword();
            Boolean isPwdRight = password.equals(savedPassword);
            if (isPwdRight) {
                Optional<User> employee = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), savedPassword);
                if (employee.isPresent()) {
                	loginMessage = new LoginMessage("Login Success", true);
                } else {
                	loginMessage = new LoginMessage("Login Failed", false);
                }
            } else {

            	loginMessage =  new LoginMessage("password Not Match", false);
            }
        }else {
        	loginMessage =  new LoginMessage("Email not exits", false);
        }
		return ResponseEntity.ok(loginMessage);
	}
}
