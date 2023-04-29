// window.addEventListener("load", (event) => {
// event.preventDefault();
//     let userData = JSON.parse(localStorage.getItem("data"));
//     console.log(userData)
//     let fullname = userData.fullName;
//     let Email = userData.email;
//     document.getElementById("result-name").innerHTML = fullname;
//     document.getElementById("result-email").innerHTML = Email;
// });
// const formData = JSON.parse(localStorage.getItem('formData'));
// document.querySelector('#name').textContent = formData.name;
// document.querySelector('#email').textContent = formData.email;

const formData = JSON.parse(localStorage.getItem('data'));
if (!formData || !formData.accessToken) {
    window.location.href = '/signup.html';
} else {
    // console.log(formData.accessToken);
    document.querySelector('#name').textContent = formData.fullName;
    document.querySelector('#email').textContent = formData.email;
    document.querySelector('#password').textContent = formData.password;
    const logOutBtn = document.querySelector("#logout-btn");
    logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("data");
        window.location.href = 'signup.html';
    });
}

