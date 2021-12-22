package com.eggplant.rally.presentation.api;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequiredArgsConstructor
@ResponseBody
public class UserRestController {

    @GetMapping("/list")
    public String findUserList() {

        return "hello";
    }
}
