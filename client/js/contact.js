document
.getElementById("contactForm")
.addEventListener("submit",
async function(e){

e.preventDefault();

const data = {

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

message:
document.getElementById("message").value
};

const result =
await sendContact(data);

document.getElementById("status")
.innerText =
result.message;

});