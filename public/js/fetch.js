fetch("/getData", { method: "get" })
  .then((resp) => {
    if (resp.status < 200 || resp.status >= 300)
      // если возникла ошибка, то срабатывает исключение и кадет в catch
      throw new Error("connect error");
    return resp.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });

fetch(
  "/getImage?" +
    new URLSearchParams({ src: "media/", name: "testImage.jpg" })
)
  .then((resp) => {
    if (resp.status < 200 || resp.status >= 300)
      // если возникла ошибка, то срабатывает исключение и кадет в catch
      throw new Error("connect error");
    return resp.blob();
  })
  .then((res) => {
    console.log(res);
    const a = document.getElementById("test");
    a.style = `background-image: url(${URL.createObjectURL(res)})`;
  })
  .catch((err) => {
    console.log(err);
  });

fetch(
  "/getPrice?" +
    new URLSearchParams({
      src: "media/Продажа_недвижимости/",
      name: "Прайс_Продажа_недвижимости.pdf",
    })
)
  .then((resp) => {
    if (resp.status < 200 || resp.status >= 300)
      // если возникла ошибка, то срабатывает исключение и кадет в catch
      throw new Error("connect error");
    return resp.blob();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.log(err);
  });
