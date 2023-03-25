async function fetchGetData() {
  return fetch("/getData", { method: "get" })
    .then((resp) => {
      if (resp.status < 200 || resp.status >= 300)
        // если возникла ошибка, то срабатывает исключение и кадет в catch
        throw new Error("connect error");
      return resp.json();
    })
    .then((json) => {
      // console.log(json);
      return json;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

async function fetchGetImage(req) {
  return fetch("/getImage?" + new URLSearchParams(req))
    .then((resp) => {
      if (resp.status < 200 || resp.status >= 300)
        // если возникла ошибка, то срабатывает исключение и кадет в catch
        throw new Error("connect error");
      return resp.blob();
    })
    .then((res) => {
      // console.log(res);
      return res;
    })
    .catch((err) => {
      // console.log(err);
      return "../images/moon.webp";
    });
}

async function fetchGetPrice(req) {
  return fetch(
    "/getPrice?" +
      new URLSearchParams({
        src: `assets/${req}/`,
        name: `Прайс_${req}.pdf`,
      })
  )
    .then((resp) => {
      if (resp.status < 200 || resp.status >= 300)
        // если возникла ошибка, то срабатывает исключение и кадет в catch
        throw new Error("connect error");
      return resp.blob();
    })
    .then((json) => {
      // console.log(json);
      return json;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

async function fetchReadFiles(req) {
  return fetch(
    "/getListOfDirectory?" +
      new URLSearchParams({
        src: req,
      })
  )
    .then((resp) => {
      if (resp.status < 200 || resp.status >= 300)
        // если возникла ошибка, то срабатывает исключение и кадет в catch
        throw new Error("connect error");
      return resp.json();
    })
    .then((json) => {
      // console.log(json);
      return json;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

export { fetchGetData, fetchGetImage, fetchGetPrice, fetchReadFiles };
