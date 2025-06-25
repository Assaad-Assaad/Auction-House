package be.ehb.auctionhousebackend.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;

public class CategoryDto {

    @NotBlank
    private String name;
    private String image;

    public CategoryDto() {}

    public CategoryDto(@NotBlank String name, String image) {
        this.name = name;
        this.image = image;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
}
