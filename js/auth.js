/**
 * HAVEN & HEIR - Authentication (Login / Register) Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initAuthTabs();
  initPasswordToggles();
  initAuthForms();
});

function initAuthTabs() {
  const tabBtns = document.querySelectorAll('.auth-tab-btn');
  const loginForm = document.getElementById('loginFormContainer');
  const registerForm = document.getElementById('registerFormContainer');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.getAttribute('data-mode');
      if (mode === 'login') {
        if (loginForm) loginForm.style.display = 'block';
        if (registerForm) registerForm.style.display = 'none';
      } else {
        if (loginForm) loginForm.style.display = 'none';
        if (registerForm) registerForm.style.display = 'block';
      }
    });
  });
}

function initPasswordToggles() {
  const toggleBtns = document.querySelectorAll('.password-toggle-icon');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input && (input.type === 'password' || input.type === 'text')) {
        const isPass = input.type === 'password';
        input.type = isPass ? 'text' : 'password';
        btn.innerHTML = isPass ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
      }
    });
  });
}

// Case-insensitive RFC-compliant email regex: accepts user@gmail.com, user@GMAIL.COM, user@Gmail.com
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/i;

function setValid(input) {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
}

function setInvalid(input, msg) {
  input.classList.remove('is-valid');
  input.classList.add('is-invalid');
  const parent = input.closest('.form-group') || input.parentElement;
  const feedback = parent.querySelector('.invalid-feedback');
  if (feedback && msg) {
    feedback.textContent = msg;
  }
}

function clearState(input) {
  input.classList.remove('is-valid', 'is-invalid');
}

function initAuthForms() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');

  const regName = document.getElementById('regName');
  const regEmail = document.getElementById('regEmail');
  const regPassword = document.getElementById('regPassword');

  const validateLoginEmail = () => {
    if (!loginEmail) return true;
    const val = loginEmail.value.trim();
    if (!val) {
      setInvalid(loginEmail, 'Please enter your email address.');
      return false;
    }
    if (!emailRegex.test(val)) {
      setInvalid(loginEmail, 'Please enter a valid email format (e.g. name@domain.com).');
      return false;
    }
    setValid(loginEmail);
    return true;
  };

  const validateLoginPassword = () => {
    if (!loginPassword) return true;
    const val = loginPassword.value.trim();
    if (!val) {
      setInvalid(loginPassword, 'Please enter your password.');
      return false;
    }
    setValid(loginPassword);
    return true;
  };

  const validateRegName = () => {
    if (!regName) return true;
    const val = regName.value.trim();
    if (!val) {
      setInvalid(regName, 'Please enter your full name.');
      return false;
    }
    setValid(regName);
    return true;
  };

  const validateRegEmail = () => {
    if (!regEmail) return true;
    const val = regEmail.value.trim();
    if (!val) {
      setInvalid(regEmail, 'Please enter your work or personal email.');
      return false;
    }
    if (!emailRegex.test(val)) {
      setInvalid(regEmail, 'Please enter a valid email format (e.g. name@domain.com).');
      return false;
    }
    setValid(regEmail);
    return true;
  };

  const validateRegPassword = () => {
    if (!regPassword) return true;
    const val = regPassword.value.trim();
    if (!val) {
      setInvalid(regPassword, 'Please create a password.');
      return false;
    }
    if (val.length < 8) {
      setInvalid(regPassword, 'Password must be at least 8 characters long.');
      return false;
    }
    setValid(regPassword);
    return true;
  };

  if (loginEmail) loginEmail.addEventListener('input', validateLoginEmail);
  if (loginPassword) loginPassword.addEventListener('input', validateLoginPassword);

  if (regName) regName.addEventListener('input', validateRegName);
  if (regEmail) regEmail.addEventListener('input', validateRegEmail);
  if (regPassword) regPassword.addEventListener('input', validateRegPassword);

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isEmailValid = validateLoginEmail();
      const isPassValid = validateLoginPassword();

      if (!isEmailValid || !isPassValid) {
        return;
      }

      const submitBtn = loginForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Welcome Back!';
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 800);
      }, 1000);
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isNameValid = validateRegName();
      const isEmailValid = validateRegEmail();
      const isPassValid = validateRegPassword();

      if (!isNameValid || !isEmailValid || !isPassValid) {
        return;
      }

      const submitBtn = registerForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Account Created!';
        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 800);
      }, 1000);
    });
  }
}
