export default function billNumberGenerator() {
  console.log("hello");
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const billNumber = `FYB-${year}${month}${day}-${hour}${minutes}`;
  console.log(billNumber);
  return billNumber;
}
