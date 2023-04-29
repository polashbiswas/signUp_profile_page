const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-pass").value;
    let errSuccessMsg = document.getElementById("err-success");
    if (!fullName || !email || !password || !confirmPassword) {
        errSuccessMsg.innerHTML = "Error : All the fields are mandatory";
        errSuccessMsg.style.color = "red";
    } else {
        if(password != confirmPassword){
            
            errSuccessMsg.innerHTML = "Password is not Matched";
            errSuccessMsg.style.color = "orange";
            document.getElementById("confirm-pass").value = "";
            // confirmPassword.value = "";
            // confirmPassword.focus();
            document.getElementById("confirm-pass").focus();
            return;
        }
        errSuccessMsg.innerHTML = "Successfully Signed Up!";
        errSuccessMsg.style.color = "green";
        const accessToken = generateAccessToken();
        console.log(fullName, email, password, confirmPassword, accessToken);
        let data = {
            "fullName": fullName,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword,
            "accessToken": accessToken
        };
        localStorage.setItem("data", JSON.stringify(data));
        window.location.href = "profile.html";
    }

});

function generateAccessToken() {
    const accessTokenBytes = new Uint8Array(16);
    window.crypto.getRandomValues(accessTokenBytes);
    return Array.from(accessTokenBytes, byte => ('0' + byte.toString(16)).slice(-2)).join('');
}
// function signUp(){
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
//     localStorage.setItem("data", JSON.stringify(data));
//     window.location.href = "profile.html";
// }
