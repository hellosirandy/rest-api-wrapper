# @hellosirandy/rest-api-wrapper

![npm](https://img.shields.io/npm/v/@hellosirandy/rest-api-wrapper.svg)

## Install

```
$ npm install @hellosirandy/rest-api-wrapper
```

## Usage

```js
import API from '@hellosirandy/rest-api-wrapper'

const baseURL = 'https://example.com'

const api = API(baseURL)

const options = {
  endpoint: '/test',
  token: '123456-asdf', //option
  params: {
    foo: 'bar'
  } //option
}
api.get(options)
```
