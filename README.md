

# Password Generator

A simple password generator built with HTML, CSS, and JavaScript.

## Features

* Generate passwords of variable length (1-20 characters)
* Include or exclude lowercase letters, uppercase letters, numbers, and symbols
* Display generated password on the page
* Log generated password to the console

## Usage

1. Open the `index.html` file in a web browser
2. Select the desired password length and character types using the checkboxes
3. Click the "Generate Password" button to generate a password
4. The generated password will be displayed on the page and logged to the console

## Code Structure

* `index.html`: The main HTML file that defines the structure of the page
* `style.css`: The CSS file that styles the page
* `index.js`: The JavaScript file that contains the password generation logic

## Password Generation Logic

The password generation logic is contained in the `generatePassword` function, which takes the following parameters:

* `length`: The desired length of the password
* `includeLowerCase`: A boolean indicating whether to include lowercase letters
* `includeUpperCase`: A boolean indicating whether to include uppercase letters
* `includeNumbers`: A boolean indicating whether to include numbers
* `includeSymbols`: A boolean indicating whether to include symbols

The function generates a password by randomly selecting characters from the allowed character sets and concatenating them together.

## License

This code is released under the MIT License. See the `LICENSE` file for details.
