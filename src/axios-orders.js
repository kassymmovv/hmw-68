import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://ayan-burger.firebaseio.com/'
});

export default axiosOrders;
