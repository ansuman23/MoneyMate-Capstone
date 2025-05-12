package com.banking.survey.controller;


import com.banking.survey.model.Survey;
import com.banking.survey.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/survey")
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository;
   


    // GET all surveys from /survey/all
    @GetMapping("/reviews")
    public List<Survey> getAllSurveys() {
        return surveyRepository.findAll();
    }    

    //POST a new survey to /survey/create
     @PostMapping("/take")
    public Survey takeSurvey(@Valid @RequestBody Survey survey) {
    // No need to set title here — it’s set in the constructor
            return surveyRepository.save(survey);
    }
    
}

