export const TOKEN_URL = 'URL here';
export const TOKEN_DATA = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    //Vela quais requisitos é necessario enviar  para API e acrescentar/modificar aqui em baixo
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    audience: 'YOUR_API_IDENTIFIER',
  }),
};
