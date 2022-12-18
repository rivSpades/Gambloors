export const TOKEN_URL = 'https://httpbin.org/post';
export const TOKEN_DATA = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    //Vela quais requisitos é necessario enviar  para API e acrescentar/modificar aqui em baixo
    data: 'test',
  }),
};
