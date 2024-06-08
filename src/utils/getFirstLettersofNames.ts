export const getFirstLettersOfNames = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0).toUpperCase()}${lastName
    .charAt(0)
    .toUpperCase()}`;
};

export const getFirstLetterOfName = (name: string) => {
  return `${name.charAt(0).toUpperCase()}`;
};
