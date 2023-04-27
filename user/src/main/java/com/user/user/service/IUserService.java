package com.user.user.service;

import com.user.user.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    public List<UserEntity> showAllUsers();
    public Optional<UserEntity> showOneUsers(String userId);
    public void addUsers(UserEntity user);
    public void updateUsers(UserEntity user);
    public void deleteUsers(String userId);
}
