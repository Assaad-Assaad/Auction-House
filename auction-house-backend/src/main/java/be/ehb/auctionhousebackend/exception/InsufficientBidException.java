package be.ehb.auctionhousebackend.exception;

public class InsufficientBidException extends RuntimeException {
    public InsufficientBidException(String message) {
        super(message);
    }
}
