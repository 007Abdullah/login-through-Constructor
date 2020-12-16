debugger;
var curentuser = JSON.parse(localStorage.getItem("curentuser"));




function check() {
    function Getallinfo() {
        // this.name = function() {
        //     curentuser.name;
        // }
        // this.email = function() {
        //     curentuser.email;
        // }
        // this.password = function() {
        //     curentuser.password;
        // }
        // this.gender = function() {
        //     curentuser.gender;
        // }
        this.name = function () {
            document.getElementById("name").innerHTML = curentuser.name;
        }
        this.email = function () {
            document.getElementById("email").innerHTML = curentuser.email;
        }
        this.password = function () {
            document.getElementById("password").innerHTML = curentuser.password;
        }
        this.gender = function () {
            document.getElementById("gender").innerHTML = curentuser.gender;
        }
    }
    var data = new Getallinfo();
    document.getElementById("name").innerHTML = data.name();
}


var arr = [];
var isFound = false;

function signup() {
    // this is constructor
    function Data() {
        this.name = document.getElementById("name").value;
        this.email = document.getElementById("uemail").value;
        this.password = document.getElementById("upassword").value;
        this.gender = document.getElementById("gender").value;
        this.actve = document.getElementById("active").innerHTML;

    }
    var user = new Data();
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
        arr.push(user);
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
