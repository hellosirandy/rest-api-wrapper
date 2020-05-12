import API from './index';

const api = new API('http://localhost:5001/investment-portfolio-5b1fb/us-central1/api');

api.get({
  endpoint: '/user/portfolio',
}).then((payload) => {
  console.log(payload);
});
