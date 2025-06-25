package be.ehb.auctionhousebackend.controller;


import be.ehb.auctionhousebackend.dto.AuthResponse;
import be.ehb.auctionhousebackend.dto.LoginDto;
import be.ehb.auctionhousebackend.dto.RegisterDto;
import be.ehb.auctionhousebackend.service.AuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Authentication", description = "User authentication and registration")
@CrossOrigin(origins = "http://localhost:5173")
@Validated
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    AuthResponse register(@Valid @RequestBody RegisterDto registerDto) {
        return authService.register(registerDto);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@Valid @RequestBody LoginDto loginDto) {
        String jwt = authService.login(loginDto);
        return ResponseEntity.ok(jwt);
    }

}
