let target = Math.floor(Math.random()*100);

let count=0;

function playgame(){

    let guess = parseInt(document.getElementById("num").value);
    count++;

    if(guess < target){
        document.getElementById("feedback").innerText = "Too low";
    }
    else if(guess > target){
        document.getElementById("feedback").innerText = "Too High";
    }
    else{
        document.getElementById("feedback").innerText = "Your guess is right";
        document.getElementById("attempt").innerText = "Attempts: " + count;
    }

    
}