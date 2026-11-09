// Ubuntu Community Support NPO
// Beneficiary Registration System


// Wait for the webpage to finish loading
document.addEventListener("DOMContentLoaded", function () {

    // Get the beneficiary registration form
    const form = document.getElementById("beneficiaryForm");

    // Stop the program if the form cannot be found
    if (!form) {
        return;
    }


    // Function 1: Validate the ID number
    function validateID(idNumber) {

        if (idNumber.length !== 13) {
            return false;
        }

        if (!/^\d+$/.test(idNumber)) {
            return false;
        }

        return true;
    }


    // Function 2: Validate the beneficiary's age
    function validateAge(age) {

        if (age < 1 || age > 120) {
            return false;
        }

        return true;
    }


    // Function 3: Validate the email address
    function validateEmail(email) {

        // Email is optional
        if (email === "") {
            return true;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);
    }


    // Function 4: Display all errors
    function showErrors(errors) {

        let message = "ERROR\n\n";

        // Loop through the errors
        for (let i = 0; i < errors.length; i++) {

            message +=
                (i + 1) + ". " + errors[i] + "\n";

        }

        alert(message);
    }


    // Function 5: Display successful registration
    function showSuccess(name, assistance) {

        alert(
            "REGISTRATION SUCCESSFUL\n\n" +
            "Beneficiary: " + name + "\n" +
            "Assistance: " + assistance + "\n\n" +
            "Thank you for registering with " +
            "Ubuntu Community Support NPO."
        );
    }


    // Function 6: Process the beneficiary registration
    function registerBeneficiary() {

        // Create an array to store all errors
        const errors = [];


        // Get information from the form
        const fullName =
            document.getElementById("fullName").value.trim();

        const idNumber =
            document.getElementById("idNumber").value.trim();

        const ageInput =
            document.getElementById("age").value;

        const age =
            Number(ageInput);

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const address =
            document.getElementById("address").value.trim();

        const area =
            document.getElementById("area").value.trim();

        const postalCode =
            document.getElementById("postalCode").value.trim();

        const assistance =
            document.getElementById("assistance").value;

        const consent =
            document.getElementById("consent").checked;

        // Find the selected gender
        const gender =
            document.querySelector(
                'input[name="gender"]:checked'
            );


        // Validate full name
        if (fullName === "") {

            errors.push(
                "Full name is required."
            );
        }


        // Validate ID number
        if (idNumber === "") {

            errors.push(
                "ID number is required."
            );

        } else if (!validateID(idNumber)) {

            errors.push(
                "ID number must contain exactly 13 digits."
            );
        }


        // Validate age
        if (ageInput === "") {

            errors.push(
                "Age is required."
            );

        } else if (!validateAge(age)) {

            errors.push(
                "Age must be between 1 and 120."
            );
        }


        // Validate gender
        if (!gender) {

            errors.push(
                "Gender must be selected."
            );
        }


        // Validate contact number
        if (phone === "") {

            errors.push(
                "Contact number is required."
            );
        }


        // Validate email
        if (!validateEmail(email)) {

            errors.push(
                "Please enter a valid email address."
            );
        }


        // Validate residential address
        if (address === "") {

            errors.push(
                "Residential address is required."
            );
        }


        // Validate area
        if (area === "") {

            errors.push(
                "Area is required."
            );
        }


        // Validate postal code
        if (postalCode === "") {

            errors.push(
                "Postal code is required."
            );
        }


        // Validate assistance selection
        if (assistance === "") {

            errors.push(
                "Assistance type must be selected."
            );
        }


        // Validate confirmation checkbox
        if (!consent) {

            errors.push(
                "You must confirm that the information provided is correct."
            );
        }


        // If errors were found, display them
        if (errors.length > 0) {

            showErrors(errors);

            return;
        }


        // If there are no errors, registration is successful
        showSuccess(
            fullName,
            assistance
        );


        // Clear the form
        form.reset();
    }


    // Connect the form to the registration function
    form.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Run the registration process
        registerBeneficiary();

    });


    // Get the ID number input
    const idInput =
        document.getElementById("idNumber");


    // Allow numbers only in the ID field
    idInput.addEventListener("input", function () {

        this.value =
            this.value.replace(/\D/g, "");

    });


    // Get the phone number input
    const phoneInput =
        document.getElementById("phone");


    // Allow numbers, spaces, plus signs and hyphens
    // in the phone number
    phoneInput.addEventListener("input", function () {

        this.value =
            this.value.replace(/[^\d+\s-]/g, "");

    });


    // Get the postal code input
    const postalInput =
        document.getElementById("postalCode");


    // Allow numbers only in the postal code
    postalInput.addEventListener("input", function () {

        this.value =
            this.value.replace(/\D/g, "");

    });

});