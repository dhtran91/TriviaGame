
        //Interval ID to stop
        let intervalId;

        $(document).ready(function () {
            
            //Grabbing the elements to manipulate DOM
            let contentArea = $('#content-area');
            let startGameBtn = $('#start-game');
            let playAgainBtn = $('#play-again');
            let submitBtn = $('#submit');

            //Trivia Object
            let TriviaGame = {
                questions: {
                    question1: {
                        question: "Individuals with ___ blood type are called universal donors",
                        response: [["right", "O"], ["wrong", "A"], ["wrong", "B"], ["wrong", "AB"]],
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadhwPaab0r_S9YuNe8wvV_m75LDsmu10HpSAU4iDqRWqaoLI1"
                    },
                    question2: {
                        question: "People with diabetes are unable to produce or use ______ properly.",
                        response: [["wrong", "glucose"], ["wrong", "testosterone"], ["right", "insulin"], ["wrong", "white blood cells"]],
                        image: "https://cdn.diabetesselfmanagement.com/2016/12/Campbell120516-400x250.jpg"
                    },
                    question3: {
                        question: "Individuals with ___ blood type are called the universal recipient",
                        response: [["wrong", "O"], ["wrong", "A"], ["wrong", "B"], ["right", "AB"]],
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadhwPaab0r_S9YuNe8wvV_m75LDsmu10HpSAU4iDqRWqaoLI1"
                    },
                    question4: {
                        question: "Which one of these is considered a normal blood pressure?",
                        response: [["right", "118/78"], ["wrong", "128/89"], ["wrong", "88/62"], ["wrong", "142/90"]],
                        image: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/24/Pictures/_6ccb9098-5f3c-11e8-828c-aa2fd3852b8f.jpg"
                    },
                    question5: {
                        question: "If you’re nearsighted, you cannot see things clearly unless they are ____ to you.",
                        response: [["right", "close"], ["wrong", "far"]],
                        image: "data:image/jpeg;base64,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"
                    },
                    question6: {
                        question: "Who had Lou Gehrig’s disease?",
                        response: [["right", "Stephen Hawking"], ["wrong", "Magic Johnson"], ["wrong", "Charlie Sheen"], ["wrong", "Steve Jobs"]],
                        image: "https://boygeniusreport.files.wordpress.com/2018/03/stephen-hawking.jpg?quality=98&strip=all&w=1200"
                    },
                    question7: {
                        question: "Is flu a bacterial or viral infection?",
                        response: [["right", "viral"], ["wrong", "bacterial"]],
                        image: "https://images.theconversation.com/files/142712/original/image-20161021-1760-1tqxi73.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
                    }
                },
                time: 20,
                correct: 0,
                currentQuestion: 0,
                gameStarted: false,
                isCorrect: false,
                isIncorrect: false,
                correctAnswer: null,
                showQuestion: function (currInt) {
                    let currQuestion = TriviaGame.questions['question' + currInt];
                    let timer = $('<div>').attr('id', 'timer').appendTo('#content-area').text('Time Left: ' + TriviaGame.time);
                    let question = $('<div>').attr('id', 'question').html('<h2>' + currQuestion.question + '</h2>').appendTo('#content-area');
                    let form = $('<div>').attr('id', 'choices').appendTo('#content-area');
                    for (let i = 0; i < currQuestion.response.length; i++) {
                        if (currQuestion.response[i][0] === 'right') {
                            TriviaGame.correctAnswer = (currQuestion.response[i][1]);
                        }
                        $('<input>').attr({
                            type: 'radio',
                            name: 'choice',
                            value: currQuestion.response[i][0]
                        }).appendTo('#choices')
                        $('<label>').attr('for', 'choice' + (i + 1)).html(currQuestion.response[i][1]).appendTo('#choices');
                        $('<br>').appendTo('#choices');
                    }

                    submitBtn.css('display', 'inline-block');
                    intervalId = setInterval(TriviaGame.countdownTimer, 1000)
                    
                    
                },
                showAnswer: function (currInt) {
                    $('#choices').remove();
                    $('#timer').remove();
                    let currQuestion = TriviaGame.questions['question' + currInt];
                    $('<img>').attr('src', currQuestion.image).appendTo('#content-area');
                    $('<div>').html('<h2>The answer was ' + TriviaGame.correctAnswer + '</h2>').appendTo('#content-area')
                    TriviaGame.currentQuestion++;
                    setTimeout(TriviaGame.showContent, 3000);
                },
                showContent: function () {
                    if (!TriviaGame.gameStarted) {
                        contentArea.html(`<h2>Welcome to Medical Trivia! How much random medical questions can you answer?!</h2>`)
                        contentArea.append($('<img>').attr('src', 'http://s3.amazonaws.com/dev-pablo.marketkarma.com/9yrvhi5k2nr3jz8caqmw141r7-art-work.jpg'))
                        startGameBtn.css('display', 'inline-block');
                        playAgainBtn.css('display', 'none');
                        submitBtn.css('display', 'none');
                    } else {
                        submitBtn.css('display', 'none');
                        startGameBtn.css('display', 'none');
                        playAgainBtn.css('display', 'none');
                    }

                    if (TriviaGame.isCorrect) {
                        TriviaGame.correct++;
                        TriviaGame.isCorrect = false;
                        TriviaGame.showAnswer(TriviaGame.currentQuestion);
                    } else if (TriviaGame.isIncorrect) {
                        TriviaGame.isIncorrect = false;
                        TriviaGame.showAnswer(TriviaGame.currentQuestion);
                    } 
                    else if (TriviaGame.currentQuestion === 8) {
                        contentArea.empty();
                        contentArea.html(`<h2>You got ` + TriviaGame.correct + `/7` + ` correct!</h2>`)
                        playAgainBtn.css('display', 'inline-block');
                        if (TriviaGame.correct < 3) {
                            contentArea.append($('<img>').attr('src', 'https://media.giphy.com/media/oMb8VLNlungHe/giphy.gif'))    
                        } else if (TriviaGame.correct < 6) {
                            contentArea.append($('<img>').attr('src', 'http://37.media.tumblr.com/b3d596b0545a7d356e25326ef4490b21/tumblr_n4wg07Ij541smcbm7o1_250.gif'))
                        } else {
                            contentArea.append($('<img>').attr('src', 'https://i.pinimg.com/originals/af/24/fe/af24fe997fc99db6a5489ae53da5a4d0.gif'))
                        }
                    } 
                    else if (TriviaGame.currentQuestion >= 1) {
                        contentArea.empty();
                        TriviaGame.showQuestion(TriviaGame.currentQuestion);
                    }
                },
                startGame: function () {
                    TriviaGame.gameStarted = true;
                    TriviaGame.isCorrect = false;
                    TriviaGame.isIncorrect = false;
                    TriviaGame.correct = 0;
                    TriviaGame.incorrect = 0;
                    TriviaGame.currentQuestion = 1;
                    TriviaGame.showContent();
                },
                countdownTimer: function () {
                    
                    if (TriviaGame.time === 1) {
                        
                        clearInterval(intervalId);
                        let response = document.querySelector('input[name="choice"]:checked');
                        if (response === null) {
                            response = null;
                        } else {
                            response = response.value;
                        }

                        if (response === 'right') {
                            $('<div>').html('<h2>Correct!</h2>').appendTo('#content-area')
                            TriviaGame.isCorrect = true;
                            TriviaGame.time = 20;
                            TriviaGame.showContent();

                        } else {
                            $('<div>').html('<h2>You got it wrong!</h2>').appendTo('#content-area')
                            TriviaGame.isIncorrect = true;
                            TriviaGame.time = 20;
                            TriviaGame.showContent();
                        }
                   
                    } else {
                    TriviaGame.time--;
                    $('#timer').text('Time Left: ' + TriviaGame.time);
                    }
                }
            }

            TriviaGame.showContent();

            $(document).on('click', '#start-game', function () {
                TriviaGame.startGame();
            })

            $(document).on('click', '#play-again', function () {
                TriviaGame.startGame();
            })

            $(document).on('click', '#submit', function () {
                let response = document.querySelector('input[name="choice"]:checked').value;
                clearInterval(intervalId);
                intervalId = 0;
                TriviaGame.time = 20;

                if (response === 'right') {
                    $('<div>').html('<h2>Correct!</h2>').appendTo('#content-area')
                    TriviaGame.isCorrect = true;
                    TriviaGame.showContent();
                } else {
                    $('<div>').html('<h2>You got it wrong!</h2>').appendTo('#content-area')
                    TriviaGame.isIncorrect = true;
                    TriviaGame.showContent();
                }

            })

        })


    