package be.ehb.auctionhousebackend.controller;


import be.ehb.auctionhousebackend.dto.AuctionDto;
import be.ehb.auctionhousebackend.model.Auction;
import be.ehb.auctionhousebackend.model.AuctionBid;
import be.ehb.auctionhousebackend.service.AuctionService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Auctions", description = "Operations related to auctions")
@CrossOrigin(origins = "http://localhost:5173")
@Validated
@RestController
@RequestMapping("/api/v1/auctions")
public class AuctionController {

    private final AuctionService auctionService;

    @Autowired
    public AuctionController(AuctionService auctionService) {
        this.auctionService = auctionService;
    }


    @GetMapping
    List<Auction> getAuctions(@RequestParam(required = false) String category,
                              @RequestParam(required = false) Double minPrice,
                              @RequestParam(required = false) Double maxPrice,
                              @RequestParam(required = false) String status) {
        return auctionService.searchAuctions(category, minPrice, maxPrice, status);
    }

    @PostMapping
    ResponseEntity<Auction> createAuction(@Valid @RequestBody AuctionDto auctionDto) {
        return ResponseEntity.ok(auctionService.createAuction(auctionDto));
    }

    @GetMapping("/{id}")
    ResponseEntity<Auction> getAuction(@PathVariable int id) {
        return ResponseEntity.ok(auctionService.findById(id));
    }

    @GetMapping("{id}/bids")
    List<AuctionBid> findAllByAuctionId(@PathVariable("id") int auctionId) {
        return auctionService.findAllBidsByForAuction(auctionId);
    }

    @PostMapping("/{id}/bids")
    ResponseEntity<Void> bidOnAuction(@PathVariable("id") int auctionId, @Valid @RequestBody AuctionBid auctionBid) {
        auctionService.bidOnAuction(auctionId, auctionBid);
        return ResponseEntity.ok().build();
    }
}
