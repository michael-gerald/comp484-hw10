$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.fight-button').click(clickedFightButton);
    $('.reset-button').click(clickedResetButton);

    document.querySelector(".treat-button").addEventListener("click", () => {
      showTempImg("images/po_eating.jpg", 2000)
    })

    document.querySelector(".play-button").addEventListener("click", () => {
      showTempImg("images/po_play.jpg", 2000)
    })

    document.querySelector(".exercise-button").addEventListener("click", () => {
      showTempImg("images/po_stairs.gif", 2000)
    })

    document.querySelector(".fight-button").addEventListener("click", () => {
      showTempImg("images/po_dragon.jpg", 2000)
    })
    //error 404
    document.querySelector(".reset-button").addEventListener("click", () => {
      showTempImg("images/po_deeznuts.jpg", 2000)
    })
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Po", weight:260, happiness:100, strength:20};

    var default_po = 'images/po_default.png';

    

    function clickedTreatButton() {
      console.log("TreatButton clicked"); 

      pet_info.panda(); // TypeError: undefined function
      // Increase pet happiness
      pet_info.happiness += 15;
      // Increase pet weight
      pet_info.weight += 10;
      if (pet_info.weight >= 400) { // log warning
        console.warn("Warning: Po is getting full. Stop feeding him");
      }
      document.getElementById('dialogue').textContent = 'I love noodles! Gimmie more!';
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      console.log("PlayButton clicked");
      // Increase pet happiness
      pet_info.happiness += 5;
      // Decrease pet weight
      pet_info.weight -= 2;
      if (pet_info.weight <= 0) { // log error
        console.error("BIG ERROR: Po has no weight. FEED HIM ASAP!");
      }
      //cause violation
      const duration = 4000;
      const start = new Date().getTime();
      while (new Date().getTime() < start + duration) {
        //blocks main thread 3000 ms/3 secs
      }

      document.getElementById('dialogue').textContent = 'This is so much fun!!';
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      console.log("ExerciseButton clicked");
      // Decrease pet happiness
      pet_info.happiness -= 5;
      // Decrease pet weight
      pet_info.weight -= 5;
      if (pet_info.weight <= 0) { // log error
        console.error("BIG ERROR: Po has no weight. FEED HIM ASAP!");
      }
      // increase strength
      pet_info.strength += 5;
      document.getElementById('dialogue').textContent = 'My old enemy... stairs.';
      checkAndUpdatePetInfoInHtml();
    }

    function clickedFightButton() {
      console.log("%cPo is fighting!", "color: yellow; font-size: 16px;"); //custom log
      // decrease pet happiness (doesn't like fighting)
      pet_info.happiness -= 5;
      // decrease pet weight 
      pet_info.weight -= 5;
      if (pet_info.weight <= 0) { // log error
        console.error("BIG ERROR: Po has no weight. FEED HIM ASAP!");
      }
      // increase strength
      pet_info.strength += 10;
      //console group
      console.group("Po's stats after his fight");
      console.log("Happiness:", pet_info.happiness);
      console.log("weight:", pet_info.weight);
      console.log("Strength:", pet_info.strength);
      console.groupEnd();

      document.getElementById('dialogue').textContent = 'Skadoosh!';
      checkAndUpdatePetInfoInHtml();
    }

    //resets to default values so you don't have to reset browser
    function clickedResetButton() {
      console.log("ResetButton clicked");
      pet_info.name = "Po";
      pet_info.weight = 260;
      pet_info.happiness = 100;
      pet_info.strength = 20;

      document.getElementById('dialogue').textContent = 'Buddy, I am the Dragon Warrior!';
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight < 0) {
        pet_info.weight = 0; //ensures that it can't get lower than 0
      }
      if(pet_info.weight > 400) {
        pet_info.weight = 400; //maximum 400 because pandas can reach to a maximum of approx. 350 lb
      }
      // Add conditional so if happiness is lower than zero.
      if(pet_info.happiness < 0) {
        pet_info.happiness = 0; //ensures that it can't get lower than 0
      }
    }

    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.strength').text(pet_info['strength']);
      console.table(pet_info);
    }

    function showTempImg(newImg, duration = 2000) {
      const petImage = document.getElementById("petImage");
      const ogImage = petImage.src; //default Po img
      petImage.src = newImg; //replace with temp Po img
      setTimeout(() => {
        petImage.src = ogImage; //restore default Po img
      }, duration)
    }

    //.keypress() method
    //essentially you press a key and it triggers an event
    //in this project, if you press 'r' on your keyboard
    //it triggers the reset function, which is another way of resetting pet_info
    $(document).keypress(function (event) {
      if (event.key === "r" || event.key === "R") {
        clickedResetButton();
      }
    });
  

  