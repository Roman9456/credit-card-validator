export default function paySystem(number) {
  document.querySelectorAll(".card-item").forEach((el) => {
    el.classList.remove("active");
  });
  const firstNum = number.slice(0, 1);
  switch (firstNum) {
    case "2":
      document.querySelector(".cardMir").classList.add("active");
      break;
    case "3":
      document.querySelector(".cardAmericanExpress").classList.add("active");
      break;
    case "4":
      document.querySelector(".cardVisa").classList.add("active");
      break;
    default:
      break;
  }
  const twoNum = number.slice(0, 2);
  switch (+twoNum) {
    case 50:
    case 56:
    case 57:
    case 58:
    case 67:
    case 63:
      document.querySelector(".cardMaestro").classList.add("active");
      break;
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
      document.querySelector(".cardMastercard").classList.add("active");
      break;
    case 62:
      document.querySelector(".cardUnionPay").classList.add("active");
      break;
    default:
      break;
  }
}
