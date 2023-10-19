const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const port = 5001;

app.use(express.json());

// Define the validation middleware
const registrationValidator = [
  body('username').trim().notEmpty().withMessage('Name must be provided'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email must be provided')
    .isEmail()
    .withMessage('Must be a valid email')
    .custom(async (email) => {
      // Replace this with your logic to check if the email already exists
      const exists = checkIfEmailExists(email);
      if (exists) {
        throw new Error('Email already exists');
      }
    }),
  body('password').trim().notEmpty().withMessage('Password must be provided'),
];

app.post('/register', registrationValidator, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // If the request is valid, continue with registration logic
  res.json({ message: 'Registration successful' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Replace this with your database check logic
function checkIfEmailExists(email) {
  // Simulate checking if the email already exists in the database
  return false; // Assume the email does not exist
}
