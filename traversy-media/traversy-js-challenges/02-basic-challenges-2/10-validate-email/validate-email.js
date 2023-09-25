function validateEmail(email) {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [localPart, domain] = email.split("@"); // domain, email.com

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  } // domain = email.com

  const domainExtension = domain.split("."); // email com

  if (
    domainExtension.length < 2 ||
    domainExtension[domainExtension.length - 1].length < 2 // com < 2 letters
  ) {
    return false;
  }

  return true;

  // const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  // return emailRegex.test(email);
}

module.exports = validateEmail;
