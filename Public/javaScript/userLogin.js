
  const form = document.getElementById("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!usernameValue) {
      usernameError.textContent = "Please enter a username";
      return;
    } else {
      usernameError.textContent = "";
    }

    if (!passwordValue) {
      passwordError.textContent = "Please enter a password";
      return;
    } else {
      passwordError.textContent = "";
    }
    if (usernameValue !== "anas" || passwordValue !== "1234") {
      // usernameError.textContent = 'Username and password do not match';
      passwordError.textContent = "Username and password do not match";
      return;
    }

    form.submit();
  });
