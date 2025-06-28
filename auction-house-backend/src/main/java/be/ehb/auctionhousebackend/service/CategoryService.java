package be.ehb.auctionhousebackend.service;


import be.ehb.auctionhousebackend.dto.CategoryDto;
import be.ehb.auctionhousebackend.exception.ResourceException;
import be.ehb.auctionhousebackend.model.Auction;
import be.ehb.auctionhousebackend.model.Category;
import be.ehb.auctionhousebackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    public Category findById(int id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new ResourceException("Category not found"));
    }

    public Category save(CategoryDto categoryDto) {
        Category category = new Category();
        category.setName(categoryDto.getName());
        category.setImage(categoryDto.getImage());

        return categoryRepository.save(category);
    }

    public void delete(int id) {
        categoryRepository.deleteById(id);
    }

    public Category update(int id, CategoryDto categoryDto) {
        Category existingCategory = findById(id);
        existingCategory.setName(categoryDto.getName());
        existingCategory.setImage(categoryDto.getImage());
        return categoryRepository.save(existingCategory);
    }

    public List<Auction> getAllAuctionsAssignedToCategory(int categoryId) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceException("Category not found."));

        List<Auction> auctions = category.getAuctions();

        if (auctions.isEmpty()) {
            throw new ResourceException("There is no auctions in the category.");
        }
        return auctions;
    }
}
