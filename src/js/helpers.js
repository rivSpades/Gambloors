import * as config from './config.js';

export const req = async (url, data) => {
  try {
    const res = await axios({
      method: data.method,
      url: url,
      headers: data.headers,
      data: data.body,
    });

    const resData = {
      response: res.data,
      error: '',
    };

    return resData;
  } catch (err) {
    //console.log(err.response.data);
    const dataArr = Object.entries(err.response.data);
    //console.log(dataArr[0][1][0]);
    const resData = {
      response: '',
      error: dataArr[0][1][0],
    };
    return resData;
  }
};

export class request2 {
  state = {
    output: '',
  };
  #url;
  #data;
  constructor(url, data) {
    this.#data = data;
    this.#url = url;
  }
  async post() {
    try {
      const fetchData = fetch(this.#url, this.#data);
      const res = await fetchData;

      if (!res.ok)
        throw new Error(
          'something went wrong' + data.message + ' ' + res.status
        );
      const data = await res.json();
      this.state.output = data;
    } catch (err) {
      console.log(err);
    }
  }
  async get() {
    try {
      const res = await fetch(this.#url);
      if (!res.ok)
        throw new Error(
          'something went wrong' + data.message + ' ' + res.status
        );

      const data = await res.json();
      this.state.output = data;
    } catch (err) {
      console.log(err);
    }
  }
}

/*export class token {
  state = {
    token: '',
  };

  #url = config.TOKEN_URL;
  #data = config.TOKEN_DATA;

  constructor() {}

  async init() {
    try {
      console.log(this.#url);
      console.log(this.#data);
      const fetchData = fetch(this.#url, this.#data);
      const res = await fetchData;
      const data = await res.json();
      if (!res.ok)
        throw new Error(
          'something went wrong' + data.message + ' ' + res.status
        );
      console.log(data);
      this.state.token = data.token;
      console.log(this.state.token);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}*/

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
