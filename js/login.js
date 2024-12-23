// Login form
const validationLoginForm = new JustValidate("#login-form");
const loginform = document.getElementById("login-form");
validationLoginForm
  .addField('input[name="email"]', [
    { rule: "required", errorMessage: "Email is required" },
    { rule: "email", errorMessage: "Email is invalid" },
  ])
  .onSuccess((event) => {
    // Collect form data
    const formData = new FormData(event.target);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log(formObject);
    alert("Form submitted successfully");
    loginform.reset();
  })
  .onFail((event) => {
    console.log("Form validation failed");
  });
