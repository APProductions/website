// Initialize EmailJS
(function() {
  emailjs.init("Gc2sdu3o3-bQ_G1n5"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Collect form data
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // EmailJS template parameters
  const templateParams = {
    from_name: name,
    from_number: number,
    from_email: email,
    from_message: message,
  };

  // Send the email using EmailJS
  emailjs.send("service_9xtzdoq", "template_7u9yefo", templateParams)
    .then(function(response) {
      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.error("FAILED...", error);
    });
});

let valudisplays=document.querySelectorAll(".num");
let interval=1000;
valudisplays.forEach((valudisplay)=>{
let startvalue=0;
let endvalue=parseInt(valudisplay.getAttribute("data-val"));
let duration=Math.floor(interval/endvalue);
let counter=setInterval(function (){
  startvalue   +=1;
  valudisplay.textContent=startvalue;
  if(startvalue==endvalue){
    clearInterval(counter);
  }
}, duration);
});
function showsidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hidesidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'

}


// form validations
document.getElementById("contactForm").addEventListener("submit", function(event) {
  let isValid = true;

  // Get input fields and error messages
  let nameInput = document.getElementById("name");
  let contactInput = document.getElementById("number");
  let emailInput = document.getElementById("email");

  let nameError = document.getElementById("name-error");
  let contactError = document.getElementById("contact-error");
  let emailError = document.getElementById("email-error");

  // Name Validation
  if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      isValid = false;
  } else {
      nameError.style.display = "none";
  }

  // Contact Number Validation
  if (contactInput.value.trim() === "") {
      contactError.style.display = "block";
      isValid = false;
  } else {
      contactError.style.display = "none";
  }

  // Email Validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
      emailError.style.display = "block";
      isValid = false;
  } else {
      emailError.style.display = "none";
  }

  // Prevent form submission if any validation fails
  if (!isValid) {
      event.preventDefault();
  }
});
