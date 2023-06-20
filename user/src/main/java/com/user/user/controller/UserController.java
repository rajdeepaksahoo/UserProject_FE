package com.user.user.controller;

import com.user.user.entity.UserEntity;
import com.user.user.exception.PassordMismatchException;
import com.user.user.service.ImpUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@CrossOrigin("http://frontend/")
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    ImpUserService service;
    @GetMapping(path = "/all")
    public ResponseEntity<List<UserEntity>> showAllUsers() {
        List<UserEntity> allCars = service.showAllUsers();
        return ok(allCars);
    }

    @GetMapping(path = "/search/{userId}")
    public ResponseEntity<UserEntity> showOneUser(@PathVariable String userId) {
        Optional<UserEntity> optional = service.showOneUsers(userId);
        return ok(optional.get());
    }

    @PostMapping(path = "/adduser")
    public ResponseEntity< Map<String,HttpStatus>> addUser(@RequestBody UserEntity user) {
        if (user.getPassword().equals(user.getConfirmPassword())) {
            service.addUsers(user);
        }
        else {
                throw new PassordMismatchException("pasword mismatch");

        }
        Map<String,HttpStatus> m = new HashMap<>();
        m.put(user.getUserId(),HttpStatus.CREATED);
        return ResponseEntity.ok(m);
    }

    @PutMapping(path = "/updateuser")
    public ResponseEntity<Map<String, HttpStatus>> updateUser(@RequestBody UserEntity user) {
        Map<String, HttpStatus> m = new HashMap<>();
        m.put(user.getUserId(),HttpStatus.OK);
        service.updateUsers(user);
        return ResponseEntity.ok(m);
    }
    @CrossOrigin("http://localhost:4200/")

    @DeleteMapping(path = "/delete/{userId}")
    public ResponseEntity<Map<String, HttpStatus>> deleteUser(@PathVariable String userId) {
        service.deleteUsers(userId);
        Map<String, HttpStatus> m = new HashMap<>();
        m.put(userId,HttpStatus.OK);
        return ResponseEntity.ok(m);
    }
}
