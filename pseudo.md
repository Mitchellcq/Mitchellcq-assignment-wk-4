basic variables:
    1. question index =0;
    2. time = question.length*30;
    3. questions object

functions:
    1. start quiz () {
        hide start screen;

        unhide questions;

        start timer;
            setInterval(clock, 1000)
        show timer;
            textContent = time
        
        getQuestions();
    }

    2. get questions(){
        get current question from array;

        update question element;

        clear question on selection;

        for loop through answers;
            create button, append to element;
            add event listener for answer choice ;
    }

    3. answer choice (){
        if (wrong){ reduce time}
            if (time < 0){ time = 0}
            next question
        else () next question

        wrong/right setTimeout display for a second

    }
    
    4. end quiz(){

        hide question element

        show end screen

        input for initials, display score

        store info in local storage
        }
    }

    5. clock() {
        update time
        if (time <=0) {end quiz}
    }

    6. next question(){
        question index++
        if(question index > questions.length) {end quiz}
    }
    7. event listener for start button