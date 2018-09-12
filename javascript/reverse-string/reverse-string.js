'use string';

const reverseString = (str) => {
  // iteration
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;

  // recursion
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substring(1)) + str.charAt(0);
  }

  // magic
  return str.split('').reverse().join('');
};

export default reverseString;