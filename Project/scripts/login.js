const lemail = document.getElementById("emailInput");
const lpassword = document.getElementById("pwdInput");
let flag = false;
let loggedIn = true;

function login(){
    if(lemail.value == ''){
        alert("Please enter your email address");
        return;
    }
    else if(lpassword.value == ''){
        alert("Please enter your password");
        return;
    }
    else if(lpassword.value.length < 6){
        alert("Password must be minimum 6 characters Long");
        return;
    }
    else{
        USERS.forEach(user => {
            if(user.email == lemail.value && user.password == lpassword.value){
                flag = true;
                const currentUser = user.name;
                localStorage.setItem("userName",JSON.stringify(currentUser));
            }
        });
    }

    if(flag){
        window.location.href = "index.html";
        loggedIn = true;
        alert("Login Successfully");    
    }
    else{
        loggedIn = false;
        alert("Invalid Email or Password, Try SignUp! or Forgot Passowrd");
    }
}