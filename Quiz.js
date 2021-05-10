class Quiz{

  constructor(){}

  getState(){

    var gameStateRef  = database.ref('gameState');

    gameStateRef.on("value",function(data){

       gameState = data.val();

    })

  }

  update(state){

    database.ref('/').update({

      gameState: state

    })

  }

  async start(){

    if(gameState === 0){

      contestant = new Contestant();

      var contestantCountRef = await database.ref('contestantCount').once("value");

      if(contestantCountRef.exists()){

        contestantCount = contestantCountRef.val();

        contestant.getCount();

      }

      question = new Question();

      question.display();

    }

  }

  play(){

    text("QUIZ RESULTS", 350, 0)

    Contestant.getContestantInfo();

    if(allContestants !== null){

      fill("purple");
      textSize(22);
      text("*NOTE : Contestants who answered correctly are highlighted with Green Color whereas who did it wrong are highlighted with Red Color", 120, 250);

    }

    for(var plr in allContestants){

      var correctAns = "2";

      if(correctAns === allContestants [plr].answer)

        fill("green");

        else

        fill("red");

    }

    }
    
  }
