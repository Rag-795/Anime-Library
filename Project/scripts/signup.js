const Name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const password = document.getElementById("pwdInput");
const USERS = JSON.parse(localStorage.getItem("users")) || [];
let exists = false;

function containsNum(str){
    for(let char of str){
        if(!isNaN(char))
            return true;
    }
    return false;
}

function register(){
    if(Name.value == '')
        alert("Please enter your name");
    else if(containsNum(Name.value))
        alert("Name Should not contain any numbers");
    else if(email.value == '')
        alert("Please enter your email address");
    else if(password.value == '')
        alert("Please enter your password");
    else if(password.value.length < 6)
        alert("Password must be minimum 6 characters Long");
    else{
        USERS.forEach(user => {
            if(user.email == email.value){
                alert("User already exists");
                exists = true;
                window.location.href = "login.html";
            }
        })

        if(!exists){
            USERS.push({"name": Name.value,"email": email.value,"password": password.value});
            localStorage.setItem("users",JSON.stringify(USERS));
            window.location.href = "login.html";
            alert("Account Created Successfully");
        }
    }
}