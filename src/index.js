import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Set default URL for all requests

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Set default Token for authorization
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';


// axios.interceptors.request.use(request => {
//   console.log(request);
//   // Edit request config before returning
//   return request;
// }, error => {
//   console.log(error);
//   // Reject the end and forward to the catch method
//   return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//   // console.log(response);
//   return response;
// }, error => {
//   console.log(error);
//   return Promise.reject(error);
// });

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
