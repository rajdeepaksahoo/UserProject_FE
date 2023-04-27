package com.user.user.handeller;

import com.user.user.exception.PassordMismatchException;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class CustomExceptionHandeller {
    @ExceptionHandler(PassordMismatchException.class)
    public ResponseEntity<String> mismatch(PassordMismatchException pme){
        return new ResponseEntity<String>(pme.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
