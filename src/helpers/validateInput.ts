import isURL from 'validator/es/lib/isURL';

export const validateInput = (input: string) => {
  // validate that it exists and is a string
  if (!input || typeof input !== 'string') {
    return false;
  }

  return isURL(input);
};
