window.addEventListener("load", () => {
  if (!window.location.href.includes('load')) return;

  const leadFormContainer = document.querySelector('.lead-form-container');
  const leadForm = document.querySelector('.lead-form');
  const supportContact = document.querySelector('.support-contact');
  const submitButton = document.querySelector('#submit-button');

  const LEAD_FORM_STATE = 'lead-form-submit-state';

  const checkIfSubmitted = () => {
    const isLeadFormSubmitted = localStorage.getItem(LEAD_FORM_STATE);

    return !!isLeadFormSubmitted;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent redirect

    localStorage.setItem(LEAD_FORM_STATE, true);

    // disable the button
    submitButton.disabled = true;
    submitButton.innerText = "Loading...";

    setTimeout(() => {
      leadFormContainer.classList.add('hidden');
      supportContact.classList.remove('hidden');
    }, 1000)
  };

  const init = () => {
    supportContact.classList.add('hidden');
    leadFormContainer.classList.add('hidden');

    // display the appropriate view based on lead-form-submit-state
    if (checkIfSubmitted()) {
      supportContact.classList.remove('hidden');
    } else {
      leadFormContainer.classList.remove('hidden');
    }
  }

  // RESET
  const reset = (e) => {
    const { shiftKey, ctrlKey, keyCode } = e;

    // only allow ctrl + shift + c
    if (!(shiftKey && ctrlKey && keyCode === 3)) return;

    localStorage.removeItem(LEAD_FORM_STATE);

    submitButton.innerText = "Submit"
    submitButton.disabled = true

    init();
  }

  init();

  leadForm.addEventListener('submit', handleSubmit);
  window.addEventListener('keypress', reset);
});
