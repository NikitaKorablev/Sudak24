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
