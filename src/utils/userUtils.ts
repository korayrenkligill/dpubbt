export const getInitials = (name: string, surname: string) => {
  return `${name.charAt(0)}${surname.charAt(0)}`.toUpperCase();
};
