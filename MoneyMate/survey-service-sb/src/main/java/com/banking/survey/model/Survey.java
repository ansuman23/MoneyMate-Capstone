
package com.banking.survey.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private final String title = "Customer Satisfaction Survey"; // Fixed title

    private String username;
    private String preferredBranch;
    private String preferredService;
    private boolean usesOnlineBanking;
    private int satisfactionRating;
    private String suggestions;
    private LocalDateTime submittedAt;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPreferredBranch() {
        return preferredBranch;
    }

    public void setPreferredBranch(String preferredBranch) {
        this.preferredBranch = preferredBranch;
    }

    public String getPreferredService() {
        return preferredService;
    }

    public void setPreferredService(String preferredService) {
        this.preferredService = preferredService;
    }

    public boolean isUsesOnlineBanking() {
        return usesOnlineBanking;
    }

    public void setUsesOnlineBanking(boolean usesOnlineBanking) {
        this.usesOnlineBanking = usesOnlineBanking;
    }

    public int getSatisfactionRating() {
        return satisfactionRating;
    }

    public void setSatisfactionRating(int satisfactionRating) {
        this.satisfactionRating = satisfactionRating;
    }

    public String getSuggestions() {
        return suggestions;
    }

    public void setSuggestions(String suggestions) {
        this.suggestions = suggestions;
    }

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }
}
