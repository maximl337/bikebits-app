import axios from 'axios';

export function login(email, password) {
  var url = '/api/auth/login';
  return axios.post(url, {
    email,
    password
  })
}