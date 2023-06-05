const EmailDecrypt = {
  init() {
    this.decrypt();
  },
  decrypt() {
    const email = document.querySelector('a[href^="mailto:"]');
    const emailDecrypted = email.getAttribute('href').replace('domain', 'gmail').replace('dot', '.').replace('[at]', '@');
    email.setAttribute('href', emailDecrypted);
    email.innerHTML = emailDecrypted.replace('mailto:', '');
  }
};

export default EmailDecrypt;