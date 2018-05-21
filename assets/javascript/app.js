

   


   
   var number = 60;

   var intervalId;

   function run() {
     clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);
   }

   function decrement() {
     number--;
     $("#numberDown").html("<h2>" + number + "</h2>");
     if (number === 0) {
       stop();
   
       $(".questions").hide();
       $("#scoreBoard").show();
       //insert code that will show  All Done! and give scores for answers!


     }
   }
     var scoreNumber = 0

   function score() {
    }


   function increment() {
     number--;
     var i = 0; i++; return i;
     $("#wins").html("<h3>" + number + "<h3>");
     
   }

   function stop() {
     clearInterval(intervalId);
   }

   run();
