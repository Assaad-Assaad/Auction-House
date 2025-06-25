package be.ehb.auctionhousebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class AuctionHouseBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuctionHouseBackendApplication.class, args);
    }

}
