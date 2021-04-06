export default function zipCodeMask(code) {
  const regexp = /^(\d{5})([\d]{1,3})$/;
  const handledZipCode = code.replace(regexp, '$1-$2');
  return handledZipCode;
}
