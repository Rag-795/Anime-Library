const email = document.getElementById("emailInput");
const password1 = document.getElementById("pwdInput-1");
const password2 = document.getElementById("pwdInput-2");
const USERS = JSON.parse(localStorage.getItem("users"));
let noUser = true;

function updatePassword(){
    if(email.value == ''){
        alert("Please enter your email address");
        return;
    }
    else if(password1.value == ''){
        alert("Please enter your new password");
        return;
    }
    else if(password2.value == ''){
        alert("Please enter your new password again");
        return;
    }
    else if(password1.value != password2.value){
        alert("Passwords do not match");
        return;
    }
    else if(password1.value.length < 6){
        alert("Password must be minimum 6 characters Long");
        return;
    }
    else{
        USERS.forEach(user => {
            if(user.email == email.value){
                user.password = password1.value;
                localStorage.setItem("users",JSON.stringify(USERS));
                alert("Password Changed Successfully");
                window.location.href = "login.html";
                noUser = false;
            }
        })

        if(noUser){
            alert("User not found.");
        }
    }
}