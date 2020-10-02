// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Have you seen these claims?",
        "main":    "<p>In a world of social media, false claims run rampant on the Internet. Which ones have you come accross, and which ones are actually false?</p>",
        "results": "<h5>Learn More</h5><p>Click the arrows to learn more about misinformation on the Internet.</p>",
        // "level1":  "Jeopardy Ready",
        // "level2":  "Jeopardy Contender",
        // "level3":  "Jeopardy Amateur",
        // "level4":  "Jeopardy Newb",
        // "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "President Donald Trump regularly claims there is rampant voter fraud via invalid ballots. Is this true?",
            "a": [
                {"option": "Yes, this claim is true.",      "correct": false},
                {"option": "No, this claim is not true.",     "correct": true}
            ],
            "correct": "<p><span>Correct. This is false.</span> According to an article posted on factcheck.org, there are only 1,285 proven instances of voter fraud.</p>",
            "incorrect": "<p><span>Incorrect. This is false.</span> According to an article posted on factcheck.org, there are only 1,285 proven instances of voter fraud.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "When COVID-19 began spreading in the United States, many claims spread online about the effectiveness of mask wearing. One claim states wearing a mask reduces the amount of oxygen in the body. Is this true?",
            "a": [
                {"option": "Yes, this claim is true.",               "correct": false},
                {"option": "No, this claim is false.",   "correct": true}
            ],
            "select_any": true,
            "correct": "<p><span>Correct. This is false.</span> According to the BBC, this claim is false. Masks made of proper materials will not cause a decrease in oxygen levels.</p>",
            "incorrect": "<p><span>Incorrect. This is false.</span> According to the BBC, this claim is false. Masks made of proper materials will not cause a decrease in oxygen levels.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "A video shared on Twitter shows Joe Biden saying the wrong words while reciting the Pledge of Allegiance. The claim is that he misrecited the pledge. Is this claim true?",
            "a": [
                {"option": "Yes, thie claim is true.",           "correct": false},
                {"option": "No, this claim is false.",            "correct": true}
            ],
            "correct": "<p><span>Correct. This claim is false.</span> The video is cut from one of his speeches, not from when he was reciting the pledge.</p>",
            "incorrect": "<p><span>Incorrect. This claim is false.</span> The video is cut from one of his speeches, not from when he was reciting the pledge.</p>" // no comma here
        },
        { // Question 4
            "q": "Many sexual allegations have been made against President Donald Trump. According to Snopes, some claim that he 'raped children aged 13 and younger, and he paid at least $35 million to settle most of those claims.' Is this claim true?",
            "a": [
                {"option": "Yes, this claim is true.",    "correct": false},
                {"option": "No, this claim is false.",     "correct": true}
            ],
            "correct": "<p><span>Correct. This claim is false.</span> According to Snopes, 'no evidence supports the claim that Trump has paid upwards of $35 million to silence accusations that he raped several children ranging in age from 10 to 13.'</p>",
            "incorrect": "<p><span>Incorrect. This claim is false.</span> According to Snopes, 'no evidence supports the claim that Trump has paid upwards of $35 million to silence accusations that he raped several children ranging in age from 10 to 13.'</p>" // no comma here
        },
        { // Question 5
            "q": "The claim that sex traffickers mark the cars of their victims has spread on social media. Is this claim true?",
            "a": [
                {"option": "Yes, this claim is true.",    "correct": false},
                {"option": "No, this claim is false.",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct. This claim is false.</span> According to USA TODAY, there is no evidence to suggest that sex traffickers mark the cars of their victims.</p>",
            "incorrect": "<p><span>Incorrect. This claim is false.</span> According to USA Today, there is no evidence to suggest that sex traffickers mark the cars of their victims.</p>" // no comma here
        } // no comma here
    ]
};
