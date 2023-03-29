const gameContainer = document.querySelector(".container"),
userResult=document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result =document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");


// Loop through each option image element

optionImages.forEach((image, index) =>{
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src;

        result.textContent = "Wait..."

        //loop through each option image again
        optionImages.forEach((image2, index2) => {
            //if the current index doesn't match the clickes index remove the active class from the other option images

            index !== index2 && image2.classList.remove("active");

        } );

        gameContainer.classList.add("start");

        //set a timeout to delay the result 

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
        
        
        // Get the source of the clicked option image 


            let imageSrc = e.target.querySelector("img").src; 

            userResult.src = imageSrc;

            // Generate a random number between 0 to 2

            let randomNumber = Math.floor(Math.random() * 3);

            //let  create an array of cpu img options

            let cpuImages = ["/img/rock.png","/img/paper.png","/img/scissors.png"];

            //set the cpu image to a random option from the array

            cpuResult.src = cpuImages[randomNumber];

            //set the cpu image to a random option (R , P, s)

            let cpuValue = ["R","P","S" ][randomNumber]

            // assign a letter value to the clicked option (based on index)

            let userValue = ["R","P","S"][index];

            // create an object with all possible outcomes

            let outcomes = {
                RR:"Draw",
                RP:"Cpu",
                RS:"User",
                PP:"Draw",
                PR:"User",
                PS:"Cpu",
                SS:"Draw",
                SR:"Cpu",
                SP:"User",


            };

            // look up the outcome value based on user and cpu options 

            let outComeValue = outcomes[userValue + cpuValue];

            // Dispaly the result

           result.textContent =  userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        },2500);
                       
      
    });
});
