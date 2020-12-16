let curentuser = JSON.parse(localStorage.getItem("curentuser"));


if (curentuser) {
    document.getElementById("name").innerHTML = curentuser.nams;
    document.getElementById("email").innerHTML = curentuser.email;
    document.getElementById("password").innerHTML = curentuser.password;
    document.getElementById("gender").innerHTML = curentuser.gender;
}



let arr = [];
let isFound = false;
function signup() {
    var user = {
        name: document.getElementById("name").value,
        email: document.getElementById("uemail").value,
        password: document.getElementById("upassword").value,
        gender: document.getElementById("gender").value,
        actve: document.getElementById("active").innerHTML

    };

    var getData = localStorage.getItem("arr");
    debugger;
    if (getData) {
        arr = JSON.parse(getData);
    } else {
        arr = [];
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i].email === user.email) {
            isFound = true;
            break;
        }
    }
    if (isFound) {
        alert("already exit");

    }
    else {
        arr.push({
            nams: user.name,
            email: user.email,
            password: user.password,
            gender: user.gender

        });
    }

    localStorage.setItem("arr", JSON.stringify(arr));
    window.location.href = "login.html";



    return false;
}


function login() {
    let user = JSON.parse(localStorage.getItem("arr"));

    let lemail = document.getElementById("loginemail").value;
    let Password = document.getElementById("loginpassword").value;

    for (i = 0; i < user.length; i++) {
        if ((user[i].email === lemail) && (user[i].password === Password)) {

            localStorage.setItem("curentuser", JSON.stringify(user[i]));

            window.location.href = "home.html";
            break;
        }
        else {
            alert("Invalid");
        }
    }

    return false;
}
