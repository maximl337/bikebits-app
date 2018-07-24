import axios from 'axios';

export function login(email, password) {
  var url = '/api/auth/login';
  return axios.post(url, {
    email,
    password
  })
}

export function register(first_name, last_name, email, password, password_confirmation) {
  var url = '/api/auth/register';
  return axios.post(url, {
    first_name,
    last_name,
    email,
    password,
    password_confirmation
  });
}

export function getCategories() {
  var url = '/api/categories';
  return axios.get(url);
}