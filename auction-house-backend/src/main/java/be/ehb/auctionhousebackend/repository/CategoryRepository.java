package be.ehb.auctionhousebackend.repository;


import be.ehb.auctionhousebackend.dto.CategoryPerformanceDto;
import be.ehb.auctionhousebackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category,Integer> {

    @Query("SELECT NEW be.ehb.auctionhousebackend.dto.CategoryPerformanceDto(c.name, COUNT(a), AVG(b.price)) " +
            "FROM categories c " +
            "LEFT JOIN c.auctions a " +
            "LEFT JOIN a.bids b " +
            "GROUP BY c.name")
    List<CategoryPerformanceDto> findCategoryPerformance();
}
