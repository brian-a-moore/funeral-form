export const convertDate = (date: Date | string): string => {
  // return new Date(date).toISOString().split('T')[0];
  return date as string;
};
