package be.ehb.auctionhousebackend.service;


import be.ehb.auctionhousebackend.dto.CategoryDto;
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

    public Category save(CategoryDto categoryDto) {
        Category category = new Category();
        category.setName(categoryDto.getName());
        category.setImage(categoryDto.getImage());

        return categoryRepository.save(category);
    }
}
