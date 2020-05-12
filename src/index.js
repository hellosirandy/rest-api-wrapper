import queryString from 'query-string';

class API {
  constructor(host) {
    /** @type {string} The host of REST API. */
    this.host = host;
  }


  /**
   * Performs the GET operation
   * @param {{endpoint: string, token: string, params: object}} options
   *    endpoint: API endpoint
   *    token: Access token
   *    params: Request paramaters
   */
  async get({ endpoint, token, params }) {
    const url = params ? `${this.host}${endpoint}?${queryString.stringify(params)}` : `${this.host}${endpoint}`;
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

  /**
   * Performs the POST operation
   * @param {{endpoint: string, token: string, body: object}} options
   *    endpoint: API endpoint
   *    token: Access token
   *    body: Request body
   */
  async post({ endpoint, token, body }) {
    const res = await fetch(`${this.host}${endpoint}`, {
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

  /**
   * Performs the DELETE operation
   * @param {{endpoint: string, token: string, params: object}} options
   *    - endpoint: API endpoint
   *    - token: Access token
   *    - params: Request paramaters
   */
  async delete({ endpoint, token, params }) {
    const url = params ? `${this.base}${endpoint}?${queryString.stringify(params)}` : `${this.base}${endpoint}`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: token,
      },
    });
    const parsedRes = await res.json();
    if (!res.ok) {
      throw parsedRes;
    }
    return parsedRes;
  }

  /**
   * Performs the PUT operation
   * @param {{endpoint: string, token: string, body: object}} options
   *    endpoint: API endpoint
   *    token: Access token
   *    body: Request body
   */
  async put({ endpoint, token, body }) {
    const res = await fetch(`${this.base}${endpoint}`, {
      method: 'PUT',
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
}

export default API;
