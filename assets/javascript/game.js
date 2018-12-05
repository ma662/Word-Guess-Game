// make game object
var game = {
//========================================
// Variables for processing
//========================================

    wins: 0, 
    losses: 0,
    
    // dictionary object containing all words and defs
    wordDictionary : { 
        "8-ball": "a pool (pocket billiards) game popular in much of the world, and the subject of international professional and amateur competition. Played on a pool table with six pockets, the game is so universally known in some countries that beginners are often unaware of other pool games and believe the word 'pool' itself refers to eight-ball. The game has numerous variations, mostly regional. Standard eight-ball is the second most competitive professional pool game, after nine-ball, and for the last several decades ahead of straight pool.",
        "ball-in-hand": "also cue ball in-hand. The option of placing the cue ball anywhere on the table prior to shooting, in a game of pool. Usually only available to a player when the opposing player has committed some type of foul under a particular game's rules.",
        "black ball": "chiefly British: The black ball (usually numbered '8') in standard blackball and traditional 8-ball pool",
        "bottom spin": "a type of spin applied to the cue ball by hitting it below its equator, causing it to spin backwards even as it slides forward on the cloth. Back spin slows the cue ball down, reduces its travel, and narrows both the carom angle after contact with an object ball, and angle of reflection off a cushion.",
        "drag shot": "a shot played slowly and with heavy draw and follow-through so that the cue ball can be struck firmly but with a lot of the pace taken out, allowing more control than just a gentle tap that would travel as far. Also called 'Drag Draw'.",
        "double hit": "an illegal shot (foul) in which the cue stick's tip contacts the cue ball twice during a single stroke. Double hits often occur when a player shoots the cue ball when it is very close to an object ball or cushion, because it is difficult to move the cue stick away quickly enough after the cue ball rebounds from the cushion or object ball.",
        "banger":"a derogatory term for a recreational or beginning player who 'bangs' the balls without any thought for position nor attempt to control the cue ball; also a reference to the predilection of beginners to often hit the cue ball far harder than necessary.",
        "double kiss": "a situation in which a ball strikes another ball which is close to a rail and the struck ball rebounds back into the ball it was hit by; usually but not always unintended.",
        "bank-the-8": "a rule variant common in bar pool versions of eight-ball, in which the 8-ball must be pocketed on a bank shot (generally this would either be accomplished via a bank shot proper or a kick shot); shooting the 8 straight in is a loss of game. Players may agree before the game begins to invoke this rule, or one player may challenge another player (who might accept or refuse) to conclude the game in this manner after it is already under way. Playing bank-the-8 can be considered rude if many other players are waiting to use the table, since it often makes the game last considerably longer. Often on bar tables three scratches determines a loss. The same with last-pocket.",
        "check side": "also commonly referred to as 'check' is a type of spin imparted to the cue ball to make it rebound from a cushion at a shallower angle than it would if the spin had not been used. Normally played when the natural angle is no good to the player for the next shot.",
        "cinch a ball": "to play a shot with the stroke and speed that makes it easiest to pocket the object ball, even at the expense of sacrificing position.",
        "cling": "phenomenon where two balls, (usually the cue ball and an object ball) have some foreign material (often residual chalk or dirt picked up from unbrushed cloth) between them at the point of contact, resulting in the struck object ball being thrown offline from the expected trajectory, and often also affecting the post-impact path of the cue ball.",
        "cloth": "the baize cloth covering the tables playing surface and rails, usually made from wool or a wool-nylon blend. In use since the 15th century, cloth is traditionally green-colored, chosen for its evocation of grass. Sometimes cloth is improperly referred to as 'felt.' The properties of the cloth used to cover a table, as well as environmental conditions that can affect it—notably humidity, the degree it has been stretched when installed, and its level of cleanness—have a profound effect on play.",
        "combination": "also combination shot, combo. Any shot in which the cue ball contacts an object ball, which in turn hits one or more additional object balls (which in turn may hit yet further object balls) to send the last-hit object ball to an intended place, usually a pocket. In the UK this is often referred to as a plant.",
        "contact point": "the point on each of two balls at which they touch at the moment of impact.",
        "act of god": "disturbance of table or balls as a result of something out of a player's control (e.g., something falling from the ceiling, or an earthquake).",
        "aiming line": "the imaginary line through the CB in the direction of the intended target (e.g., the center of the ghost ball) that results in contact with a rail or the OB at the desired contact point.",
        "alternating break": "tournament format where the players take turns breaking, regardless of who wins the previous game.",
        "answer": "successful reply to good play from the opponent.",
        "behind the back": "playing a difficult to reach shot by shooting with the cue behind one's back.",
        "butt": "the handle or grip end of the cue.",
        "crush": "slang term for the break.",
        "cue efficiency": "a percentage measure of how much energy is retained (not lost) during cue impact with the cue ball.",
        "avoidance shot": "a shot where the cue ball path is controlled to avoid hitting surrounding balls.",
        "back swing": "portion of the stroke where the cue is pulled back in preparation for the forward stroke into the cue ball.",
        "ball rack": "a rack, usually wall mounted, for holding or storing balls.",
        "band": "the white stripe on balls 9 through 15.",
        "bank shot": "a shot in which the object ball is bounced off one or more rails before being pocketed.",
        "cue tip": "the shaped, component (usually leather) on the end of the cue that comes in contact with the cue ball.",
        "curve shot": "a shot using a slightly elevated cue and bottom-side english to create massé (swerve) action to curve the cue ball a small amount around an obstacle ball.",
        "dirty pool": "unsportsmanlike conduct or play.",
        "dog a shot": "miss a shot badly due to pressure, or miss an easy shot due to loss of concentration or focus.",
        "dots": "alternative term for 'solids' or 'diamonds'.",
        "double draw shot": "a good-action draw shot where the CB draws back to a nearby cushion and retains enough backspin after rebound to draw back toward the cushion again.",
        "double the pocket": "intentionally rebound the CB off both pocket points for position or to avoid a bank double kiss.",
        "double the rail": "use reverse english at a shallow angle to a rail to cause the CB to return to the same rail after hitting the adjacent rail.",
        "egg": "slang for CB.",
        "elevated cue": "when the butt of the cue is held higher than the tip (as with most shots). The higher the butt is raised, the more the cue is elevated (e.g., with a jump or massé shot).",
        "escape": "successful reply to a safety or snooker.",
        "fall": "to enter a pocket.",
        "fast cloth": "cloth with very low rolling resistance (i.e., the CB travels far before slowing).",
        "head pocket": "a corner pocket at the head of the table.",
        "heart of the pocket": "dead center of the pocket.",
        "high balls": "same as 'stripes'.",
        "hit": "the action of one ball contacting another (usually the CB into an OB).",
        "hook": "hide a ball behind another ball or point of a pocket. or same as 'fish'.",
        "illegal marking": "using chalk, powder, moisture, or any other means to mark a spot on the table cloth or rails as an aiming aid. This is not allowed.",
        "jab stroke": "a short punch-like stroke.",
        "jaws": "the inside walls of a pocket.",
        "judy": "slang for 'cue ball'.",
        "lag shot": "a skill shot used where each player must shoot a ball from behind the head string and return it as close as possible to the head rail after bouncing off the foot rail.",
        "lay": "ball positions (e.g., the 'lay' of the table is difficult).",
        "legs": "slang for ball rolling speed (e.g., does that ball have enough 'legs' to get to the pocket?).",
        "lemonading": "conning a gambling opponent by not playing to your ability.",
        "loa": "'line of aim.'",
        "lengthen the angle": "use slow speed roll or running english to increase the rebound angle of a bank or kick shot, so the ball goes 'longer' than normal.",
    },
    
    // length of word + some x 
    guessesRemaining: 0, 

    // word chosen randomly 
    correctWord: ['_', ''],

    // user input string that will appear on page as well as go into lettersGuessed. 
    currentGuess: '',

    // string of previously guessed variables
    lettersGuessed: '',

    // string of missing letters so far to be populated by wordDictionary words, checked if currentGuess is inside, then remove from string
    remainingLetters: '',

//========================================
// Variables for displaying
//========================================
    // when true, displays win message, win++ 
    win: false,
    lose: false,
    
    // string to be manipulated for the correct input display
    nowDisplaying: '',
    correctDefinition: '',

    // scoreboard data
    winDisplay: document.getElementById("winDisplay"),
    loseDisplay: document.getElementById("loseDisplay"),
    guessesRemainingDisplay: document.getElementById("guessesRemainingDisplay"),
    timeDisplay: document.getElementById("timeDisplay"),

    // input displaying
    inputDisplay: document.getElementById("inputDisplay"),
    lettersGuessedDisplay: document.getElementById("lettersGuessedDisplay"), // make changes after every valid input

    // word and def after correct word
    previousWordDisplay: document.getElementById("previousWordDisplay"),
    definitionDisplay: document.getElementById("definitionDisplay"),

//========================================
// Functions for Displaying
//========================================

    // initialize the textbox with selected word
    initializeInput: function() {
        var inputDisplay = game.inputDisplay;
        correctWord = game.correctWord[0];

        var startingWord = correctWord;                                 // "8-ball" | "double hit"
        var displayFormatted = correctWord.replace(/[a-z0-9]/gi, "_");  // "_-____" | "______ ___"
        displayFormatted = displayFormatted.split('').join('&nbsp;');   // "_ - _ _ _ _"
        
        inputDisplay.innerHTML = displayFormatted;
        
        // set game object variable to be accessed by drawInput() later 
        game.nowDisplaying = displayFormatted;
    },

    // call after input
    drawInput: function(guess) {
        //var nowDisplaying = game.nowDisplaying;

        // if contains strange symbols, do not replace with underscore
        var currentWord = game.correctWord[0];                      // split unformatted word into array 
        var toDisplay = game.nowDisplaying;                         // pull whatever nowDisplaying is, manipulate it, then stuff it back inside
        var inputDisplay = game.inputDisplay;                       // variable to hold the div manipulations
        var lettersGuessed = game.lettersGuessed;                   // pull the string of guessed letters
        var remainingLetters = game.remainingLetters;               // local var
        var guess = guess;                                          // given by function call

        // do not include: guess, lettersGuessed, space character; set global flag
        var notGuessed = new RegExp("[^" + guess + lettersGuessed + "\ \-" + "]", "g");

        // if guess is in correctWord, I want you to replace inputDisplay with guess for every instance of guess
        if (currentWord.includes(guess)
        && guess != ''){                            // ["8", "-", "b","a","l","l"]  | guess = 'l'
            toDisplay = currentWord.replace(notGuessed, '_');
        }

        toDisplay = toDisplay.split('').join('&nbsp;');

        inputDisplay.innerHTML = toDisplay;
        game.nowDisplaying = toDisplay;
    },


//========================================
// Functions for Processing
//========================================

    // function for randomly generating an int to be used as index in word selection logic
    getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // function that sets all the shit
    initialize: function(){
        this.guessesRemaining = 0;
        this.correctWord = ['', ''];
        this.remainingLetters = '';
        this.lettersGuessed = '';
        this.currentGuess = '';
        this.nowDisplaying = '';
        this.win = false;
        this.lose = false;
        
        this.inputDisplay.innerHTML = '';
        this.lettersGuessedDisplay.style.display = "none";
        this.guessesRemainingDisplay.innerHTML = 0;

        game.selectWord(); // can pass debug parameter to force a word
        game.playerInput();
        game.initializeInput();
    },

    // function that takes random int and selects from wordDictionary a random word and it's definition
    selectWord: function(debugVal) {
        console.log("[------------ selectWord() start ►");
        // declare local vars
        var size;
        var x;
        var word;
        var definition;
        
        // find size of wordDictionary. 
        size = Object.keys(this.wordDictionary).length;
        
        // generate random int between 0 and length of wordDictionary. -1 to account for index max not taking into account the 0th index.
        x = this.getRandomInt(0, size - 1);
        
        // force x to be certain integer
        if (typeof debugVal === 'number'){
            x = debugVal;
        }
                    
        // word is the key of wordDictionary at index x
        word = Object.keys(this.wordDictionary)[x];
        console.log("Word selected.");

        // definition is wordDictionary[key of wordDictionary at index x]
        definition = this.wordDictionary[Object.keys(this.wordDictionary)[x]];
        console.log("Definition selected.");

        console.log({
            debugVal : debugVal,
            size : size,
            x : x,
            word : word,
            definition : definition,
        });
        
        this.correctDefinition = definition;

        // correctWord[0] is word
        this.correctWord[0] = word;

        // correctWord[1] is formatted
        this.correctWord[1] = this.correctWord[0].replace(/\W/g, '');

        console.log("correctWord: " + this.correctWord[0]);
        console.log("correctWord (formatted): " + this.correctWord[1]);

        console.log("------------] selectWord() end ■ ]]");
        console.log("Calling genGuessesRemaining() ~> ");
        game.genGuessesRemaining(word);
    },

    // function that generates how many guessesRemaining
    genGuessesRemaining: function() {
        console.log("[------------  [[ genGuessesRemaining() start ► [[ ");

        var baseLength;
        var additional = 0;
        var guessesRemaining;

        // find length of formatted correctWord length
        baseLength = this.correctWord[1].length;
        
        if (baseLength < 9){
            additional = 5;
        }

        // set guessesRemaining local var
        guessesRemaining = baseLength + additional;

        console.log({
            baseLength : baseLength,
            additional : additional,
            guessesRemaining : guessesRemaining,
        });

        // set guessesRemaining game object var
        this.guessesRemaining = guessesRemaining;
        this.guessesRemainingDisplay.innerHTML = this.guessesRemaining;

        console.log("baseLength + additional: " + this.guessesRemaining);
        console.log("------------] genGuessesRemaining() end ■ ]]");
    },

    // function to determine remainingLetters left after the currentGuess
    // called after every valid input
    genRemainingLetters: function() {
        console.log("[------------  [[ genRemainingLetters() start ► [[ ");

        var word;
        var guess = game.currentGuess;
        
        // the initialized case
        if (game.remainingLetters === '') {
            // set word equal to formatted string
            word = this.correctWord[1];
        }
        else {
            word = this.remainingLetters;
        }
    
        // if remainingLetters contains currentGuess
        if (word.includes(guess)) {                     
            console.log('remainingLetters contains currentGuess!');
            console.log({
                word: word,
                guess: guess
            });

            // draw input with guess
            game.drawInput(guess);

            // create a new regexp object. uses currentGuess with argument g (replace all instances) and stores it into re
            var re = new RegExp(guess, "g");
            word = word.replace(re, '');
        }
        
        // set local var to game object var
        this.remainingLetters = word;

        console.log({
            word: word,
            guess: guess
        });

        console.log("------------] genRemainingLetters() end ■ ]]");
        console.log("Calling checkWin() ~>");                
    },
    
    // function for adding input to lettersGuessed string
    genLettersGuessed: function() {
        console.log("[------------  [[ genLettersGuessed() start ► [[ ");
        
        // explicitly make sure lettersGuessed is a string equal to itself
        var lettersGuessed;
        var currentGuess;
        var win = game.win;
        var lose = game.lose;

        lettersGuessed = game.lettersGuessed; //.toString();
        currentGuess = game.currentGuess;

            // if lettersGuessed includes the valid currentGuess
            if (!lettersGuessed.includes(currentGuess)) {
                game.lettersGuessed += game.currentGuess;
                
                //this.lettersGuessedDisplay.innerHTML = lettersGuessed.toString();
                
                console.log("letters guessed so far: " + game.lettersGuessed);
                console.log("Calling guessesLeft() ~> [from genLettersGuessed]");
                game.guessesLeft();
            }
            else if (!currentGuess === ''){
                console.log({
                lettersGuessed : lettersGuessed,
                currentGuess : currentGuess,
                win : win,
                lose : lose
            });

            alert("You've already guessed that letter.");
        }
        console.log("------------] genLettersGuessed() end ■ ]]");
    },

    // function for telling how many guessesLeft
    guessesLeft: function() {
        console.log("[------------  [[ guessesLeft() start ► [[ ");

        var guessesRemaining = game.guessesRemaining;
        var correctWord = game.correctWord[1];
        var currentGuess = game.currentGuess;
        var remainingLetters = game.remainingLetters;

        console.log({
            guessesRemaining : guessesRemaining,
            correctWord : correctWord,
            currentGuess : currentGuess,
        });

        
        if((guessesRemaining != 0) &&                       // player didn't lose
        !(correctWord.includes(currentGuess))){             // correctWord doesn't contain currentGuess
        guessesRemaining -= 1;
        }
    
        console.log("After Logic");
        
        console.log({
            guessesRemaining : guessesRemaining,
            correctWord : correctWord,
            currentGuess : currentGuess,
            remainingLetters : remainingLetters
        });

        // set game object var to local var
        game.guessesRemaining = guessesRemaining;
        
        game.guessesRemainingDisplay.innerHTML = game.guessesRemaining;

        game.checkLose(game.guessesRemaining);

        console.log("guessesLeft (lives left) is: " + game.guessesRemaining)
        console.log("------------] guessesLeft() end ■ ]]");
    },

    // function for playerInput
    playerInput: function() {
    console.log("[------------  [[ playerInput() start ► [[ ");
    
        // declare local vars
        var isValid = false;
        var code;
        var guess = game.currentGuess;
        var wins = game.wins;
        var losses = game.losses;
        
        // when detecting key input on page
        document.onkeyup = function(input_event){
            var rawInput = input_event.key;
            console.log("rawInput: " + rawInput);
            
            // turn rawInput into charCode and check if valid
            code = rawInput.charCodeAt(0);
            if ((!(code > 47 && code < 58) &&    // numeric (0-9)
                !(code > 64 && code < 91) &&    // upper alpha (A-Z)
                !(code > 96 && code < 123))     // lower alpha (a-z)
                || (rawInput.length != 1)) {    // or rawInput.length is too long
                console.log(isValid + ", not alphanumeric");
                
                //alert("Only number and letter input, please try again.");
            }
            else {
                isValid = true;
                
                // force rawInput to be lowercase
                guess = rawInput.toLowerCase();
                console.log(isValid + ", input is truly alphanumeric and has been formatted");
                
                // set game object var to local var
                game.currentGuess = guess;
            }

            // if the input isValid
            if (isValid){
                // call function to determine remainingLetters left after the currentGuess
                console.log("Calling genRemainingLetters() ~> ");
                game.genRemainingLetters(game.correctWord);
                var remainingLetters = game.remainingLetters;
                
                // call function for adding input to lettersGuessed string
                console.log("Calling genLettersGuessed() ~> ");
                game.genLettersGuessed();
                
                game.lettersGuessedDisplay.style.display = "block";
                game.lettersGuessedDisplay.innerHTML = game.lettersGuessed;

                // try checking win here
                game.checkWin(remainingLetters);
            }

            console.log("onkeyup event data:");
            console.log({
                rawInput : rawInput,
                code : code,
            });
        } // end onkeyup event 

        // if wins or losses is greater than 1 reset the vars
        if (wins > 0 || losses > 0) {
                isValid = false;
                code = 0;
                guess = '';
            }

        console.log( "playerInput() data:");
        console.log({
            isValid : isValid,
            guess : guess,
        });

        console.log("------------] playerInput() end ■ ]]");
    },
    
    // function just to check if win 
    checkWin: function(anyRemaining) {
        console.log("[------------  [[ checkWin() start ► [[ ");

        // declare local vars
        var win = game.win;
        var wins = game.wins;
        var restart = false;

        if (anyRemaining.length === 0) {
            console.log("Game won!");

            win = true;
            wins++;
            restart = true;
        }
        else{
            console.log("Win not yet detected");
        }

        // assign local vars to object vars
        game.win = win;
        game.wins = wins;
        
        if (game.win) {
            // replace with page update
            console.log("You've won!");

            // display stuff
            game.previousWordDisplay.innerHTML = game.correctWord[0] + ": ";
            game.definitionDisplay.innerHTML = game.correctDefinition.toLowerCase();
            game.winDisplay.innerHTML = game.wins;
            
            alert("You've won! Congratulations!\nThe word was: " + game.correctWord[0]);
        }
        
        console.log({
            win : win,
            wins : wins,
            anyRemaining : anyRemaining
        });

        if (restart) {
            // call restart function
            game.doRestart();
        }

    console.log("------------] checkWin() end ■ ]]");
    },

    checkLose: function(numGuesses) {
    console.log("[------------  [[ checkLose() start ► [[ ");

        // declare local vars
        var lose = game.lose;
        var losses = game.losses;
        var restart = false;

        // if numGuesses reaches 0
        if (numGuesses === 0) {
            lose = true;
            losses++;
            restart = true;
        }
        else{
            console.log("Loss not yet detected");
        }
        
        // assign local vars to object vars
        game.lose = lose;
        game.losses = losses;
        
        if (game.lose != false) {
            // replace with page update
            game.loseDisplay.innerHTML = game.losses;
            alert("You've lost!");
        }

        console.log({
            lose : lose,
            losses : losses,
            numGuesses : numGuesses
        });

        if (restart) {
            // call restart function
            game.doRestart();
        }

    console.log("------------] checkLose() end ■ ]]");
    },

    doRestart: function() {
        console.log("Game Restarting!");

        game.win = false;
        game.lose = false;


        var audio = new Audio("./assets/sounds/pool_break.mp3");
        audio.play();
        game.initialize();
    },

    updateClock: function() {
    var now = new Date(),
    time = now.toLocaleTimeString();
    
    game.timeDisplay.innerHTML = new Date().toLocaleTimeString();
    setTimeout(game.updateClock, 1000);
    }
}; // end gameObject

// set initial volume to 25%
var audio = document.querySelector('audio');
audio.volume = 0.25;

game.updateClock();
game.initialize();


console.log("[------------  [[ Initial Gamestate Complete ]]");