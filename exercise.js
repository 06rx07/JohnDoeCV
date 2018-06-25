function toggleHobby() {
    const getHobby = document.getElementById('hobby');
    if(getHobby.classList.contains('visible')){
        getHobby.classList.remove('visible');
    } else {
        getHobby.classList.add('visible');
    }
}
function showGreetings(){
    const currentHour = (new Date()).getHours();
    const greeting = document.getElementById("greetings");
    let greetMsg = "";
    if(currentHour >= 22 || currentHour < 6){
        greetMsg = "Good Night!";
    } else if(currentHour >= 6 && currentHour < 12){
        greetMsg = "Good Morning!";
    } else if(currentHour >= 12 && currentHour < 18){
        greetMsg = "Good Afternoon!";
    } else {
        greetMsg = "Good Evening!";
    }
    greeting.innerHTML = greetMsg;
}