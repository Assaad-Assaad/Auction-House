package be.ehb.auctionhousebackend.repository;


import be.ehb.auctionhousebackend.model.Auction;
import be.ehb.auctionhousebackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.time.LocalDateTime;
import java.util.List;


public interface AuctionRepository extends JpaRepository<Auction, Integer>, JpaSpecificationExecutor<Auction> {

    List<Auction> findByCategory(Category category);
    Long countByEndTimeBetween(LocalDateTime start, LocalDateTime end);


}
