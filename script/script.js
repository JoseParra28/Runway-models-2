function hideMenu(){
    const dropdown = document.querySelector('.dropdown-div')
    dropdown.style.display = 'none'
}
function showMenu(){
    const dropdown = document.querySelector('.dropdown-div')
    dropdown.style.display = 'block'
}


function sendMail(){
    let parms = {
        name : document.getElementById("fname").value,
        email : document.getElementById("email").value,
        lname : document.getElementById("lname").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_lgmsn2k","template_trumjrn",parms).then(alert("Email has been sent")) ;
}


// Profile box
// .img-desc

let profileBox = document.querySelectorAll(".profile-box")
let hiddenDiv = document.querySelector(".hidden")

for (i = 0; i < profileBox.length; i++)
    
    profileBox[i].addEventListener("click", function (){
    
        this.style.display = "none"
    })




