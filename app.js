 // instantiate GitHub 
 const gitHub = new GitHub;
 // initialize UI
 const ui = new UI;
 // create a var searchUser
 const searchUser = document.querySelector("#searchUser");
 // search input event listener
 searchUser.addEventListener("keyup", (e) => {
     // get input text
     const userText = e.target.value;
     // make sure the value is not blank
     if (userText) {
         gitHub.getUser(userText)
             .then(data => {
                 if (data.profile.message === "Not Found") {
                     // Show alert
                     ui.showAlert("User not found", "alert alert-danger");
                 } else {
                     // show profile
                     ui.showProfile(data.profile);
                     // show repos
                     ui.showRepos(data.repos);
                 }
             })
     } else {
         // clear profile
         ui.clearProfile();
     }
 });