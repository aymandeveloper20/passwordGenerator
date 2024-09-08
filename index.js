function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (length <= 0) {
    return `(password length must be at least 1)`;
  }

  if (allowedChars.length === 0) {
    return `(no characters allowed)`;
  }

  let result = document.getElementById("result");
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomNumber];
  }
  result.innerText = `${password}`;
  return password;
}
let button = document.getElementById("generate");
button.addEventListener("click", () => {
  const passwordLength = Number(document.getElementById("length").value);
  const includeLowerCase = document.getElementById("include-lowercase").checked;
  const includeUpperCase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;
  const pass = generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );
  console.log(`Password ${pass}`);
});
