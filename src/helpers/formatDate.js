export const formatDate = date => {
  const formattedDate = date.replace(/^(\d{4})-(\d{2})-(\d{2})$/, '$3.$2.$1');
  return formattedDate;
};
