export function formatNumber(number) {
  if (!number) return number;
  const tempNum = number.toString();
  const tempNo = tempNum.indexOf('.');
  return tempNum.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (item, index) =>
    tempNo < 0 || index < tempNo ? `${item},` : item
  );
}
