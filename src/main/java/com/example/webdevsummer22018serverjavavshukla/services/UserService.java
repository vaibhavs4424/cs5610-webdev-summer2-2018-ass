package com.example.webdevsummer22018serverjavavshukla.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer22018serverjavavshukla.models.User;
import com.example.webdevsummer22018serverjavavshukla.repositories.UserRepository;

@RestController
public class UserService {

	@Autowired
	UserRepository userRepository;

	@PostMapping("/register")
	public User register(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/api/profile")
	public User profile(HttpSession session) {
		User u=  (User) session.getAttribute("currentUser");
		return u;
		
	}

	@PutMapping("/api/profile")
	public User updateProfile(@RequestBody User newUser, HttpSession session) {
		User u = (User) session.getAttribute("currentUser");
		int userId = u.getId();

		Optional<User> data = userRepository.findById(userId);
		if (data.isPresent()) {
			User user = data.get();
			if (newUser.getUsername() != null)
				user.setUsername(newUser.getUsername());

			if (newUser.getFirstName() != null)
				user.setFirstName(newUser.getFirstName());

			if (newUser.getLastName() != null)
				user.setLastName(newUser.getLastName());

			if (newUser.getRole() != null)
				user.setRole(newUser.getRole());

			if (newUser.getEmail() != null)
				user.setEmail(newUser.getEmail());

			if (newUser.getPhone() != null)
				user.setPhone(newUser.getPhone());

			if (newUser.getDob() != null)
				user.setDob(newUser.getDob());
			userRepository.save(user);
			return user;
		}
		return null;

	}
	
	@PostMapping("/api/logout")
	public User login(HttpSession session) { 
		User u = (User) session.getAttribute("currentUser");
		session.invalidate();
		return u;
	}


	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		userRepository.deleteById(id);
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session, HttpServletResponse response) {
		User cUser = (User) userRepository.findUserByCredential(user.getUsername(), user.getPassword());
		if (cUser != null) {
			session.setAttribute("currentUser", cUser);

			return cUser;
		}
		response.setStatus(422);
		return null;
	}

	@GetMapping("/api/user")
	public List<User> findAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> data = userRepository.findById(userId);
		if (data.isPresent()) {
			User user = data.get();
			if (newUser.getUsername() != null)
				user.setUsername(newUser.getUsername());

			if (newUser.getFirstName() != null)
				user.setFirstName(newUser.getFirstName());

			if (newUser.getLastName() != null)
				user.setLastName(newUser.getLastName());

			if (newUser.getRole() != null)
				user.setRole(newUser.getRole());

			if (newUser.getEmail() != null)
				user.setEmail(newUser.getEmail());

			if (newUser.getPhone() != null)
				user.setPhone(newUser.getPhone());

			if (newUser.getDob() != null)
				user.setDob(newUser.getDob());
			userRepository.save(user);
			return user;
		}
		return null;
	}

	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int userId) {
		Optional<User> data = userRepository.findById(userId);
		if (data.isPresent()) {
			return data.get();
		}
		return null;
	}

}
