const getZipCodeAdress = async (zipCode) => {
  const regexp = /^(\d{5})-([\d]{3})$/;
  const handledRegexp = zipCode.replace(regexp, '$1$2');

  const response = await fetch(
    `https://viacep.com.br/ws/${handledRegexp}/json/`
  )
    .then((response) => response.json())
    .catch((err) => err);

  return response;
};

export default getZipCodeAdress;
