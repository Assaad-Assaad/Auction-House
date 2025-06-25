package be.ehb.auctionhousebackend.controller;



import be.ehb.auctionhousebackend.dto.CategoryDto;
import be.ehb.auctionhousebackend.model.Auction;
import be.ehb.auctionhousebackend.model.Category;
import be.ehb.auctionhousebackend.service.CategoryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Categories", description = "Operations related to auction categories")
@CrossOrigin(origins = "http://localhost:5173")
@Validated
@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    @GetMapping
    List<Category> findAll() {
        return categoryService.findAll();
    }

    @PostMapping
    ResponseEntity<CategoryDto> save(@Valid @RequestBody CategoryDto categoryDto) {
        categoryService.save(categoryDto);
        return ResponseEntity.ok(categoryDto);
    }

    @GetMapping("/{id}/auctions")
    ResponseEntity<List<Auction>> findAuctions(@PathVariable int id) {
       List<Auction> auctions = categoryService.getAllAuctionsAssignedToCategory(id);
        return ResponseEntity.ok(auctions);
    }

}
