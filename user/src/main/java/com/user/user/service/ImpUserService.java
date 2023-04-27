package com.user.user.service;

import com.user.user.entity.UserEntity;
import com.user.user.repo.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ImpUserService implements IUserService{
    @Autowired
    IUserRepo repo;
    @Override
    public List<UserEntity> showAllUsers() {
        return repo.findAll();
    }

    @Override
    public Optional<UserEntity> showOneUsers(String userId) {
        return repo.findById(userId);
    }

    @Override
    public void addUsers(UserEntity user) {
        user=repo.save(user);
    }

    @Override
    public void updateUsers(UserEntity user) {
        user=repo.save(user);
    }

    @Override
    public void deleteUsers(String userId) {
        repo.deleteById(userId);
    }
}
