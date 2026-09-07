/**
 * HAVEN & HEIR - Contact & Property Enquiry Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactFormValidation();
});

function initContactFormValidation() {
  const form = document.getElementById('propertyEnquiryForm');
  if (!form) return;

  const successToast = document.getElementById('formSuccessToast');
  const errorToast = document.getElementById('formErrorToast');

  // Input Elements
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('emailAddress');
  const phone = document.getElementById('phoneNumber');
  const propertyType = document.getElementById('propertyType');
  const propertyLocation = document.getElementById('propertyLocation');
  const serviceRequired = document.getElementById('serviceRequired');
  const budgetRange = document.getElementById('budgetRange');
  const message = document.getElementById('clientMessage');

  // Validation Rules
  const nameRegex = /^[a-zA-Z\u00C0-\u024F\u0600-\u06FF\s'.\-]{2,50}$/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{2,5}[-\s\.]?[0-9]{2,5}[-\s\.]?[0-9]{2,9}$/;

  const setValid = (input) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  };

  const setInvalid = (input, messageText) => {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    const feedback = input.parentElement.querySelector('.invalid-feedback');
    if (feedback && messageText) {
      feedback.textContent = messageText;
    }
  };

  const clearState = (input) => {
    input.classList.remove('is-valid', 'is-invalid');
  };

  // Validators
  const validateName = () => {
    const val = fullName.value.trim();
    if (!val) {
      setInvalid(fullName, 'Please provide your full name.');
      return false;
    }
    if (!nameRegex.test(val)) {
      setInvalid(fullName, 'Please enter letters, spaces, and valid punctuation only.');
      return false;
    }
    setValid(fullName);
    return true;
  };

  const validateEmail = () => {
    const val = email.value.trim();
    if (!val) {
      setInvalid(email, 'Please enter your email address.');
      return false;
    }
    if (!emailRegex.test(val)) {
      setInvalid(email, 'Please enter a valid email format (e.g. name@domain.com).');
      return false;
    }
    setValid(email);
    return true;
  };

  const validatePhone = () => {
    const val = phone.value.trim();
    if (!val) {
      setInvalid(phone, 'Please provide a valid phone number.');
      return false;
    }
    const digitCount = val.replace(/\D/g, '').length;
    if (!phoneRegex.test(val) || digitCount < 7 || digitCount > 15) {
      setInvalid(phone, 'Please enter a valid phone number with 7 to 15 digits.');
      return false;
    }
    setValid(phone);
    return true;
  };

  const validateSelect = (selectInput, errorMsg) => {
    if (!selectInput.value || selectInput.value === '') {
      setInvalid(selectInput, errorMsg);
      return false;
    }
    setValid(selectInput);
    return true;
  };

  const validateMessage = () => {
    const val = message.value.trim();
    if (!val) {
      setInvalid(message, 'Please provide a brief message about your staging needs.');
      return false;
    }
    if (val.length < 10) {
      setInvalid(message, 'Please provide at least 10 characters describing your property.');
      return false;
    }
    setValid(message);
    return true;
  };

  // Prefill service dropdown from URL parameter (?service=vacant, ?service=openhouse, etc.)
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service') || urlParams.get('id');
  if (serviceParam && serviceRequired) {
    const cleanParam = serviceParam.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i < serviceRequired.options.length; i++) {
      const optVal = serviceRequired.options[i].value.toLowerCase().replace(/[^a-z0-9]/g, '');
      const optText = serviceRequired.options[i].text.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (optVal.includes(cleanParam) || cleanParam.includes(optVal) || optText.includes(cleanParam) || cleanParam.includes(optText)) {
        serviceRequired.selectedIndex = i;
        setValid(serviceRequired);
        break;
      }
    }
  }

  // Real-time input listeners
  fullName.addEventListener('input', validateName);
  email.addEventListener('input', validateEmail);
  phone.addEventListener('input', validatePhone);
  if (propertyType) propertyType.addEventListener('change', () => validateSelect(propertyType, 'Please select a property type.'));
  if (serviceRequired) serviceRequired.addEventListener('change', () => validateSelect(serviceRequired, 'Please select the required service.'));
  if (budgetRange) budgetRange.addEventListener('change', () => validateSelect(budgetRange, 'Please select your estimated budget.'));
  message.addEventListener('input', validateMessage);

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPropTypeValid = propertyType ? validateSelect(propertyType, 'Please select a property type.') : true;
    const isServiceValid = serviceRequired ? validateSelect(serviceRequired, 'Please select the required service.') : true;
    const isBudgetValid = budgetRange ? validateSelect(budgetRange, 'Please select your estimated budget.') : true;
    const isMessageValid = validateMessage();

    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isPropTypeValid && isServiceValid && isBudgetValid && isMessageValid;

    if (isFormValid) {
      if (errorToast) errorToast.style.display = 'none';
      if (successToast) {
        successToast.style.display = 'flex';
        successToast.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Enquiry...';

      setTimeout(() => {
        form.reset();
        [fullName, email, phone, propertyType, propertyLocation, serviceRequired, budgetRange, message].forEach(input => {
          if (input) clearState(input);
        });
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Consultation Booked!';

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
        }, 3500);
      }, 1000);
    } else {
      if (successToast) successToast.style.display = 'none';
      if (errorToast) {
        errorToast.style.display = 'flex';
        errorToast.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

