export const prepareDataSignup = (values) => {
  const prepareValuesArr = Object.entries(values)
    .filter((el) => el[0] !== "confirmConsent")
    .map((el) => {
      if (el[0] === 'phone') return [
        el[0], el[1].match((/[+\d]/g)).join('')
      ]; 
      else return el;
    });
  return Object.fromEntries(prepareValuesArr);
};