const jwt = require('jsonwebtoken');

// Secret key to sign and verify the tokens
const secretKey = 'your_secret_key';

function generateToken(email, username) {
  const payload = {
    email,
    username,
  };

  // Create a token with a payload and a secret key
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  return token;
}


const email = 'user@example.com';
const username = 'john_doe';

const token = generateToken(email, username);

console.log('Generated Token:', token);



function verifyToken(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      // Token is invalid
      return null;
    }
  }
  
  // Example usage
  const decodedToken = verifyToken(token);
  
  if (decodedToken) {
    console.log('Decoded Token:', decodedToken);
  } else {
    console.log('Token is invalid.');
  }
  