import test from "./files/test.pdf";

function clickMe(name) {
  let src;
  if (name === "1") {
    src = test;
  }
  // console.log(src);
  const link = document.createElement("a");
  link.href = src;
  link.download = "file.pdf";
  link.click();
  return false;
}

export default clickMe;
