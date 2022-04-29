import excursion from "./files/Прайс_экскурсии.pdf";
import building from "./files/Прайс_строительство.pdf";
import change from "./files/Прайс_сдача.pdf";
import buySell from "./files/Прайс_продажа_покупка.pdf";

const price = [excursion, building, change, buySell];

function clickMe(name) {
  let src;
  price.forEach((element) => {
    if (element.indexOf(name) !== -1) {
      src = element;
    }
  });
  const link = document.createElement("a");
  link.href = src;
  link.download = `${name}.pdf`;
  link.click();
  return false;
}

export default clickMe;
