// var modal = document.getElementById('MH');
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

function validate(){
    var username= $(".form-row").val();
    var lastname= $(".form-row").val();
    // if ( username === "" && lastname === ""){
    
    //     alert("Enter your inputs please!")   
    // }
    //  else if ( password.length < 8){
    //      alert("Your Password is too short!")
    //  }
    //  else if (username === "gamer" && password !== "gamer123"){
    //     alert("Wrong password!")
    //  }
    //  else if ( username !== "gamer" || password !== "gamer123"){
    //  alert("Wrong Inputs!")
    //  }

    // else  {
    //      (alert("welcome !" ))
    // }
    document.getElementById("form-row").value = '' 
}

function myFunction() {
    document.getElementById("username").value !== document.getElementById("lastname").value;
    document.getElementById("lastname").value = '' 
}