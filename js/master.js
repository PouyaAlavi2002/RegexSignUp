let passwordField = document.getElementById('password')
let _input = document.querySelectorAll('input')
_input.forEach((val) => {
    val.addEventListener('focus', () => {
        val.parentElement.style.border = '3px solid lightblue'
        val.parentElement.style.boxShadow = '0px 5px 15px lightblue'
    })
    val.addEventListener('blur', () => {
        val.parentElement.style.border = 'none'
        val.parentElement.style.boxShadow = 'none'

    })
})
const togglePassword = document.getElementById('togglePassword')
togglePassword.addEventListener('click', () => {

    let type
    if (passwordField.getAttribute("type") === "password") {
        type = "text"
    }
    else {
        type = "password"
    }
    passwordField.setAttribute("type", type)
    togglePassword.classList.toggle("bi-eye")
})

let myErr = 0
let passErr = document.getElementById('passErr')

function checkPass(e) {
    let passScore = 0
    if ((e.target.value.search(/[!@#$%&.()*]/)) >= 0) {
        passScore++
    }
    if ((e.target.value.search(/[0-9]/)) >= 0) {
        passScore++
    }
    if ((e.target.value.search(/[a-z]/)) >= 0) {
        passScore++
    }
    if ((e.target.value.search(/[A-Z]/)) >= 0) {
        passScore++
    }
    if (e.target.value.length >= 8) {
        passScore++
    }
    switch (passScore) {
        case 0: passErr.innerHTML = " "; myErr++; break;
        case 1: passErr.innerHTML = "Very Weak"; myErr++; passErr.style.color = "darkred"; break;
        case 2: passErr.innerHTML = "Weak"; myErr++; passErr.style.color = "red"; break;
        case 3: passErr.innerHTML = "Moderate"; passErr.style.color = "orange"; break;
        case 4: passErr.innerHTML = "Strong"; passErr.style.color = "green"; break;
        case 5: passErr.innerHTML = "Very Strong"; passErr.style.color = "darkgreen"; break;

    }
    formSubmit(passScore)
}

function formSubmit(ps) {
    if (ps === undefined) {
        document.getElementById('errors').innerHTML = "please fill in the password first !"
    }
    if (ps == 0) {
        document.getElementById('errors').innerHTML = "please fill in the password first !"
    }
    if ((ps > 0) && (ps <= 2)) {
        document.getElementById('errors').innerHTML = "Your Password is too weak, please try again with a stronger one."
    }
    if(ps > 2){
        document.getElementById('errors').innerHTML = "Now That's Good!"
        document.querySelector('section>div').addEventListener('click' , ()=>{
        setTimeout((location.assign("http://trainingsitedesign.ir")) , 3000)
        })
    }
}