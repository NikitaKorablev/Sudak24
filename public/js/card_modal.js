import { fetchGetImage, fetchReadFiles, fetchGetPrice, fetchGetDecription  } from "./fetch.js";

function concateString(s) {
  const obj = s.split("_");
  let str = obj[0];

  obj.forEach((el) => {
    if (str != el) {
      str += " " + el;
    }
  });
  return str;
}

async function setNewCard(param) {
  // console.log(param);
  // const dir = await fetchReadFiles(`assets/${param.Title}`);
  // console.log(dir);
  if (param.Title === undefined) throw new Error("error with param");
  let imgUrl = await fetchGetImage({
    src: `assets/${param.Title}/`,
    name: "bg.webp",
  });
  imgUrl = typeof imgUrl == "string" ? imgUrl : URL.createObjectURL(imgUrl);
  //-----------------------------------------------------------
  const card = document.createElement("div");
  card.className = "col";
  //-----------------------------------------------------------
  const a = document.createElement("a");
  a.classList.add(
    "primary-card",
    "card",
    "card-cover",
    "h-100",
    "overflow-hidden",
    "text-bg-dark",
    "rounded-4",
    "shadow-lg"
  );
  // a.style = `background-image: url(../images/moon.webp)`;
  a.style = `background-image: url(${imgUrl})`;
  a.setAttribute("data-bs-toggle", "modal");
  a.setAttribute("data-bs-target", `#${param.Title}`);
  //-----------------------------------------------------------
  const div = document.createElement("div");
  div.classList.add("d-flex", "flex-column", "h-100", "p-5", "text-shadow-1");
  //-----------------------------------------------------------
  const h3 = document.createElement("h3");
  h3.classList.add("mt-auto", "mb-auto", "display-6", "lh-1", "fw-bold");
  //-----------------------------------------------------------
  const p = document.createElement("p");
  p.id = "cardP";
  p.textContent = concateString(param.Title);
  //-----------------------------------------------------------
  h3.appendChild(p);
  div.appendChild(h3);
  a.appendChild(div);
  card.appendChild(a);
  //-----------------------------------------------------------
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.appendChild(card);
}

//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------
//-----------------------------------------------------------

async function newCarouselImage(src, ind) {
  const div = document.createElement("div");
  if (ind == 0 || ind == undefined) {
    div.classList.add("carousel-item", "active", "card-cover");
  } else {
    div.classList.add("carousel-item", "card-cover");
  }

  // const img = document.createElement("img");
  // img.className = "img-fluid";
  // try {
  //   img.src = URL.createObjectURL(await fetchGetImage(src));
  // } catch (err) {
  //   console.log(src);
  //   console.error(err);
  //   img.src = "images/moon.webp";
  // }

  // div.appendChild(img);

  try {
    div.style.backgroundImage =
      div.style = `background-image: url(${URL.createObjectURL(
        await fetchGetImage(src)
      )})`;
  } catch (err) {
    console.log(src);
    console.error(err);
    div.style = `background-image: url(${URL.createObjectURL(
      "images/moon.webp"
    )})`;
  }
  return div;
}

async function newModal(info) {
  // console.log(info);

  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = `${info.Title}`;
  modal.tabIndex = -1;
  modal.setAttribute("aria-labelledby", "exampleModalLabel");
  modal.ariaHidden = true;
  //-----------------------------------------------------------
  const modalDilog = document.createElement("div");
  modalDilog.classList.add("modal-dialog", "modal-dialog-centered");
  //-----------------------------------------------------------
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";
  //-----------------------------------------------------------
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  //-----------------------------------------------------------
  const h1 = document.createElement("h1");
  h1.id = "exampleModalLabel";
  h1.classList.add("modal-title", "fs-5");
  h1.textContent = `${concateString(info.Title)}`;
  //-----------------------------------------------------------
  const button1 = document.createElement("button");
  button1.type = "button";
  button1.className = "btn-close";
  button1.setAttribute("data-bs-dismiss", "modal");
  button1.setAttribute("aria-label", "Close");
  //-----------------------------------------------------------
  modalHeader.appendChild(h1);
  modalHeader.appendChild(button1);
  modalContent.appendChild(modalHeader);
  //-----------------------------------------------------------
  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";
  //-----------------------------------------------------------
  const modalBodyConteiner = document.createElement("div");
  modalBodyConteiner.className = "modal-body-conteiner";
  //-----------------------------------------------------------
  const row = document.createElement("div");
  row.classList.add(
    "row",
    "row-cols-1", 
    "row-cols-sm-1",
    "row-cols-md-2",
    "justify-content-between"
  );
  //-----------------------------------------------------------
  const carousel = document.createElement("div");
  carousel.id = "carousel";
  carousel.className = "col";
  //-----------------------------------------------------------
  const carouselFade = document.createElement("div");
  carouselFade.id = `carousel-${info.Title}`;
  carouselFade.classList.add("carousel", "slide", "carousel-fade");
  carouselFade.setAttribute("data-bs-ride", "carousel");
  //-----------------------------------------------------------
  const carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";
  //-----------------------------------------------------------

  const srcList = await fetchReadFiles(`assets/${info.Title}/carousel`);
  // console.log(srcList);

  if (srcList.length == 0)
    carouselInner.appendChild(
      await newCarouselImage({ src: "assets/", name: "moon.webp" })
    );
  else
    srcList.forEach(async (el, ind) => {
      // console.log(await newCarouselImage({ src: `assets/${info.Title}/carousel/`, name: el }));
      // console.log(ind);
      carouselInner.appendChild(
        await newCarouselImage(
          { src: `assets/${info.Title}/carousel/`, name: el },
          ind
        )
      );
    });

  //-----------------------------------------------------------

  //-----------------------------------------------------------
  const button2 = document.createElement("button");
  button2.type = "button";
  button2.className = "carousel-control-prev";
  button2.setAttribute("data-bs-target", `#carousel-${info.Title}`);
  button2.setAttribute("data-bs-slide", "prev");
  //-----------------------------------------------------------
  const span1 = document.createElement("span");
  span1.className = "carousel-control-prev-icon";
  span1.ariaHidden = true;

  const span2 = document.createElement("span");
  span2.className = "visually-hidden";
  span2.textContent = "Previous";

  button2.appendChild(span1);
  button2.appendChild(span2);
  //-----------------------------------------------------------

  //-----------------------------------------------------------
  const button3 = document.createElement("button");
  button3.type = "button";
  button3.className = "carousel-control-next";
  button3.setAttribute("data-bs-target", `#carousel-${info.Title}`);
  button3.setAttribute("data-bs-slide", "next");
  //-----------------------------------------------------------
  const span3 = document.createElement("span");
  span3.className = "carousel-control-next-icon";
  span3.ariaHidden = true;

  const span4 = document.createElement("span");
  span4.className = "visually-hidden";
  span4.textContent = "Next";

  button3.appendChild(span3);
  button3.appendChild(span4);
  //-----------------------------------------------------------

  carouselFade.appendChild(carouselInner);
  carouselFade.appendChild(button2);
  carouselFade.appendChild(button3);

  carousel.appendChild(carouselFade);
  //-----------------------------------------------------------
  const col6 = document.createElement("div");
  col6.id = "textCol";
  col6.className = "col";
  const tmp = await fetchGetDecription(info.Title);
  col6.textContent = tmp;
  // col6.textContent =
  //   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, \
  // cumque recusandae, nulla harum ipsa quasi, exercitationem veniam \
  // distinctio beatae consequuntur modi assumenda vitae. Sit eligendi, \
  // magnam libero iure quis ullam.";
  //-----------------------------------------------------------
  row.appendChild(carousel);
  row.appendChild(col6);

  modalBodyConteiner.appendChild(row);
  modalBody.appendChild(modalBodyConteiner);
  //-----------------------------------------------------------
  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";
  //-----------------------------------------------------------
  const button4 = document.createElement("button");
  button4.type = "button";
  button4.classList.add("btn", "btn-primary");
  button4.textContent = "Прайс-лист";

  button4.addEventListener("click", async () => {
    // console.log(info.Title);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(await fetchGetPrice(info.Title));
    link.download = `${concateString(info.Title)}`;
    link.click();
    return false;
  });
  //-----------------------------------------------------------
  modalFooter.appendChild(button4);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modalDilog.appendChild(modalContent);
  modal.appendChild(modalDilog);

  const body = document.getElementsByTagName("body")[0];
  body.appendChild(modal);
}

export { setNewCard, newModal };
