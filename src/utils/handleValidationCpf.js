export default function cpfValidate(strCPF) {
  const cpfFormatted = strCPF.replace(/\W/g, '');

  let sum;
  let remainder;
  sum = 0;
  if (cpfFormatted === '00000000000') return false;

  let i;
  for (i = 1; i <= 9; i++)
    sum = sum + parseInt(cpfFormatted.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpfFormatted.substring(9, 10))) return false;

  sum = 0;
  for (i = 1; i <= 10; i++)
    sum = sum + parseInt(cpfFormatted.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpfFormatted.substring(10, 11))) return false;
  return true;
}
