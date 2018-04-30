
function loginUser() {
    var username = document.forms["Login"]["Username"].value;
    var password = document.forms["Login"]["Password"].value;

    if (username == "" || password == "") {
        console.log("Username and Password fields can not be blank.");
        return false;
    }

    firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorMessage);

    });
    confirmAuth();
}

function confirmAuth() {
    var user = firebase.auth().currentUser;

    if (user) {
        document.getElementById("login").style.visibility = 'hidden';
        document.getElementById("comment").style.visibility = 'visible';
    } else {
        alert("Something went wrong.")
    }
}

function loginChanges() {
    var id_login = document.getElementById("login");
    var id_comment = document.getElementsById("comment");

    id_login.style.visibility = "hidden";
    id_comment.style.visibility = "visible";


}