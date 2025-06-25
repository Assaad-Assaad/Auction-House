package be.ehb.auctionhousebackend.exception;

public class AuctionClosedException extends RuntimeException {
    public AuctionClosedException(String message) {
        super(message);
    }
}
