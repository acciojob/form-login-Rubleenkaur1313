function getFormvalufunction getFormValue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve values from the input fields
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();

    // Concatenate the values into "FirstName LastName"
    const fullName = `${firstName} ${lastName}`;

    // Display the full name using alert
    alert(fullName);
}

