import {
  fetchGetData,
  fetchGetImage,
  fetchGetPrice,
  fetchReadFiles,
} from "./fetch.js";
import { setNewCard, newModal } from "./card_modal.js";

const info = await fetchGetData();

info.forEach((el) => {
  setNewCard(el);
  newModal(el)
});

// const imgUrl = await fetchGetImage({ src: "assets/", name: "testImage.jpg" });
// const a = document.getElementById("test");
// a.style = `background-image: url(${URL.createObjectURL(imgUrl)})`;

// console.log(await fetchGetPrice());

// console.log(await fetchReadFiles("assets/"));
