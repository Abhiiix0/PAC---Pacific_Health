// registration page
const validation = new JustValidate("#registration-form");
const resetButton = document.querySelector('button[type="reset"]');

// Add an event listener for the reset button
resetButton.addEventListener("click", () => {
  validation.clearErrors();
});
validation
  .addField('input[name="email"]', [
    { rule: "required", errorMessage: "Email is required" },
    { rule: "email", errorMessage: "Email is invalid" },
  ])
  .addField('input[name="firstName"]', [
    { rule: "required", errorMessage: "First name is required" },
    { rule: "minLength", value: 3, errorMessage: "At least 3 characters" },
  ])
  .addField('input[name="lastName"]', [
    { rule: "required", errorMessage: "Last name is required" },
    { rule: "minLength", value: 3, errorMessage: "At least 3 characters" },
  ])
  .addField('input[name="phone"]', [
    { rule: "required", errorMessage: "Phone number is required" },
    { rule: "minLength", value: 10, errorMessage: "Minimum 10 digits number" },
    { rule: "maxLength", value: 10, errorMessage: "Maximum 10 digits number" },
  ])
  .addField('input[name="address"]', [
    { rule: "required", errorMessage: "Address is required" },
  ])
  .addField('input[name="city"]', [
    { rule: "required", errorMessage: "City is required" },
  ])
  .addField('input[name="rural"]', [
    { rule: "required", errorMessage: "Rural is required" },
  ])
  .addField('input[name="postcode"]', [
    { rule: "required", errorMessage: "Postcode is required" },
  ])
  .addField('input[name="subrub"]', [
    { rule: "required", errorMessage: "Subrub is required" },
  ])
  .addField('select[name="country"]', [
    { rule: "required", errorMessage: "Country is required" },
  ])

  .onSuccess((event) => {
    // Collect form data
    const formData = new FormData(event.target);

    // Convert form data to an object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log(formObject);
    alert("Form submitted successfully");
  })
  .onFail((event) => {
    // Handle the failure
    console.log("Form validation failed");
  });
