import * as config from './config.js';

export class token {
  state = {
    token: '',
  };

  #url = config.TOKEN_URL;
  #tokenData = config.TOKEN_DATA;

  constructor() {}

  async init() {
    try {
      console.log(this.#url);
      console.log(this.#tokenData);
      const fetchData = fetch(this.#url, this.#tokenData);
      const res = await fetchData;
      const data = await res.json();
      if (!res.ok)
        throw new Error(
          'something went wrong' + data.message + ' ' + res.status
        );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

/*export async function makeRequest() {
  try {
    const dataToSend = [
      {
        
        userId: 10,
        id: 101,
        title: 'at nam consequatur ea labore ea harum',
        body: 'cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut',
      },
    ];

    const fetchSendData = fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',

      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },

      body: JSON.stringify(dataToSend),
    });

    const res = await fetchSendData;
    const data = await res.json();
    console.log(data);
    if (!res.ok)
      throw new Error('something went wrong' + data.message + ' ' + res.status);
    return data;
  } catch (err) {
    console.log(err);
  }
}*/
