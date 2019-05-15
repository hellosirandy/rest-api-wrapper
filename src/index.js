import queryString from 'query-string';

export default class API {
  constructor(url) {
    this.url = url;
  }

  get = async (options) => {
    const { endpoint, token, params } = options;
    const url = params ? `${this.url}${endpoint}?${queryString.stringify(params)}` : `${this.url}${endpoint}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const parsedRes = await res.json();
    if (!res.ok) {
      throw parsedRes;
    }
    return parsedRes;
  }

  post = async (options) => {
    const { endpoint, token, body } = options;
    const res = await fetch(`${this.url}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const parsedRes = await res.json();
    if (!res.ok) {
      throw parsedRes;
    }
    return parsedRes;
  }

  put = async (endpoint, token, body) => {
    const res = await fetch(`${this.url}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    return res.json();
  }
}

// const test = () => {
//   return 'hahaha'
// }

// export default test;
