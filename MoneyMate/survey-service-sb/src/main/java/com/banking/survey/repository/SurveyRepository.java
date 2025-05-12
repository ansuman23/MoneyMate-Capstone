package com.banking.survey.repository;

import com.banking.survey.model.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface SurveyRepository extends JpaRepository<Survey, Long> {
    List<Survey> findByTitleContainingIgnoreCase(String title);
}


