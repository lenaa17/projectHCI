document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;

    var formData = {
      name: name,
      email: email,
      country: country,
      message: message
    };
    console.log(formData);
    document.getElementById("contactForm").reset();
  });