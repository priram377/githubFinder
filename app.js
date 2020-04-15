//init Github
const github = new GitHub;
//init ui
const ui= new UI;
//Search input
const searchuser = document.getElementById('searchUser');

//search input event listener
searchuser.addEventListener('keyup', (e) => {
    const userText= e.target.value;
    
    if(userText != ''){
        //Make HTTP call
        github.getUser(userText)
        .then(data => {
           if(data.profile.message==='Not Found'){
            //show alert
            ui.showAlert('User no found','alert alert-danger');
           }else{
            //show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
           }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
})