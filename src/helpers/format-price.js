export function formatPrice(number) {
  const formattedNumber = number.toString().replace(',', '.');
  const paddedNumber = formattedNumber.padEnd(formattedNumber.indexOf('.') + 3, '0');

  return `€${paddedNumber}`;
}
