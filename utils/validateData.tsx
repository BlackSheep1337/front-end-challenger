export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validateCep = (cep: string): boolean => {
  const cepRegex = /^\d{5}-?\d{3}$/; 
  return cepRegex.test(cep);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};