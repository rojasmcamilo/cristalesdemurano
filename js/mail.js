
let contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

    saveContactInfo(name, email, phone, message)
}

//Save infos to Firebase
function saveContactInfo(name, email, phone, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name ,
        email: email,
        phone: phone,
        message: message
    })

}