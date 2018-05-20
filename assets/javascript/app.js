

   


   
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


   function stop() {
     clearInterval(intervalId);
   }

   run();
