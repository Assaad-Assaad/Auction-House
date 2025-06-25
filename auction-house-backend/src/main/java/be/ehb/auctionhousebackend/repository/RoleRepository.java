package be.ehb.auctionhousebackend.repository;


import be.ehb.auctionhousebackend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByName(Role.RoleName name);
}
