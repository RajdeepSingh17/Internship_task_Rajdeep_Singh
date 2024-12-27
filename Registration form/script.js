document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    // Full Name Validation
    const fullName = document.getElementById("fullName").value.trim();
    const fullNameError = document.getElementById("fullNameError");
    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      fullNameError.textContent = "Please enter a valid full name (letters and spaces only).";
      isValid = false;
    } else {
      fullNameError.textContent = "";
    }
  
    // Date of Birth Validation
    const dob = document.getElementById("dob").value.trim();
    const dobError = document.getElementById("dobError");
    if (!dob) {
      dobError.textContent = "Date of Birth is required.";
      isValid = false;
    } else {
      dobError.textContent = "";
    }
  
    // Gender Validation
    const genderError = document.getElementById("genderError");
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      genderError.textContent = "Gender is required.";
      isValid = false;
    } else {
      genderError.textContent = "";
    }
  
    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
    // Password Validation
    const password = document.getElementById("password").value.trim();
    const passwordError = document.getElementById("passwordError");
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      passwordError.textContent = "Password must be at least 6 characters and include letters and numbers.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }
  
    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
    }
  
    // Phone Number Validation
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const phoneNumberError = document.getElementById("phoneNumberError");
    if (!/^\d{10}$/.test(phoneNumber)) {
      phoneNumberError.textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
    } else {
      phoneNumberError.textContent = "";
    }
  
    // Address Validation
    const address = document.getElementById("address").value.trim();
    const addressError = document.getElementById("addressError");
    if (!address) {
      addressError.textContent = "Address is required.";
      isValid = false;
    } else {
      addressError.textContent = "";
    }
  
    // Designation Validation
    const designation = document.getElementById("designation").value.trim();
    const designationError = document.getElementById("designationError");
    if (!designation) {
      designationError.textContent = "Designation is required.";
      isValid = false;
    } else {
      designationError.textContent = "";
    }
  
    // If valid, save to LocalStorage
    if (isValid) {
      const formData = {
        fullName,
        dob,
        gender: gender.value,
        email,
        password,
        phoneNumber,
        address,
        designation,
      };
      localStorage.setItem("registrationData", JSON.stringify(formData));
      alert("Registration successful!");
      console.log("Saved Data:", formData);
      document.getElementById("registrationForm").reset();
    }
  });
  