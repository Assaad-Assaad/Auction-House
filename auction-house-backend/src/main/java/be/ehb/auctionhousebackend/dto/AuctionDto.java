package be.ehb.auctionhousebackend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;

public class AuctionDto {

    @NotBlank(message = "Name cannot be blank")
    private String productName;

    private String imageUrl;

    private String description;

    @NotNull
    private double startPrice;

    @NotNull
    @JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private LocalDateTime endTime;

    @NotNull(message = "Category is required")
    private int categoryId;



    public AuctionDto() {}

    public AuctionDto(String productName, String imageUrl, String description, double startPrice,
                      LocalDateTime endTime, int categoryId) {
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.startPrice = startPrice;
        this.endTime = endTime;
        this.categoryId = categoryId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getStartPrice() {
        return startPrice;
    }

    public void setStartPrice(double startPrice) {
        this.startPrice = startPrice;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public int getCategoryId() {
        return categoryId;
    }
    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }
}
