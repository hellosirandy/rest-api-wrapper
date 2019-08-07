# @hellosirandy/rest-api-wrapper

![npm](https://img.shields.io/npm/v/@hellosirandy/rest-api-wrapper.svg)

## Install

```
$ npm install @hellosirandy/rest-api-wrapper
```

## Usage

### Initialize
```js
import API from '@hellosirandy/rest-api-wrapper';

const baseURL = 'https://example.com';
const api = API(baseURL);
```
### Get
```js
const options = {
  endpoint: '/test',
  token: '123456-asdf', //option
  params: {
    foo: 'bar'
  } //option
}
api.get(options)
```

### Post
```js
const options = {
  endpoint: '/test',
  token: '123456-asdf', //option
  body: {
    foo: 'bar'
  } //option
}
api.post(options)
```

### Put
```js
const options = {
  endpoint: '/test',
  token: '123456-asdf', //option
  body: {
    foo: 'bar'
  } //option
}
api.put(options)
```

### Delete
```js
const options = {
  endpoint: '/test',
  token: '123456-asdf', //option
}
api.delete(options)
```