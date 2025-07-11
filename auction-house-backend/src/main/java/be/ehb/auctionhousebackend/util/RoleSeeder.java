package be.ehb.auctionhousebackend.util;


import be.ehb.auctionhousebackend.model.Role;
import be.ehb.auctionhousebackend.repository.RoleRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class RoleSeeder {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleSeeder(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }


    @PostConstruct
    void seedRoles() {
        Arrays.stream(Role.RoleName.values()).forEach(roleName -> {
            if (!roleRepository.findByName(roleName).isPresent()) {
                roleRepository.save(new Role(roleName));
            }
        });
    }
}
