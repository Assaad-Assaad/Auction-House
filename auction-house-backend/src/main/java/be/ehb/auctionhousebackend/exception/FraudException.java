package be.ehb.auctionhousebackend.exception;

public class FraudException extends RuntimeException {
    public FraudException(String message) {
        super(message);
    }
}
