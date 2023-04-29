//not working


// const signUp = document.getElementById("signup-btn");


// signUp.addEventListener("click", (event) => {
//     // alert("signup button clicked");
//     event.preventDefault();
//     const fullName = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const confirmPassword = document.getElementById("confirm-pass").value;
//     console.log(fullName, email, password, confirmPassword);
//     let data = {
//         "fullName": fullName,
//         "email": email,
//         "password": password,
//         "confirmPassword": confirmPassword
//     };
//     localStorage.setItem("email", JSON.stringify(data));
//     alert("signup done")
    
//     window.location.href = "profile.html";
//     showData();
// });

// function showData(){
//     let profile = document.getElementById("profile-container");
//     let userData = JSON.parse(localStorage.getItem("email"));
//     console.log(userData.fullName);
//     profile.innerHTML = `Welcome to profile page, ${userData.fullName}!`;
// }
