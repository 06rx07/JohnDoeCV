function toggleHobby() {
    const getHobby = document.getElementById('hobby');
    if(getHobby.classList.contains('visible')){
        getHobby.classList.remove('visible');
    } else {
        getHobby.classList.add('visible');
    }
}