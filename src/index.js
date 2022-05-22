import 'normalize.css';
import './styles.css';

const password = document.getElementById('formPassword');
const confirmation = document.getElementById('formPasswordConfirmation');

password.addEventListener('input', () => {
  if (password.validity.tooShort || password.validity.tooLong) {
    password.setCustomValidity('Password must be between 8 to 30 characters in length.');
  } else if (!password.value.match(/^(?=.*?[A-Z])/)) {
    password.setCustomValidity('Password must contain at least one uppercase letter.');
  } else if (!password.value.match(/^(?=.*?[a-z])/)) {
    password.setCustomValidity('Password must contain at least one lowercase letter.');
  } else if (!password.value.match(/^(?=.*?[0-9])/)) {
    password.setCustomValidity('Password must contain at least one number.');
  } else {
    password.setCustomValidity('');
  }
});

confirmation.addEventListener('input', () => {
  if (password.value === confirmation.value) {
    confirmation.setCustomValidity('');
  } else {
    confirmation.setCustomValidity('Passwords do not match.');
  }
});
