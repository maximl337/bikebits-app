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

export function getJourneys(categoryId) {
  const url = '/api/journeys';
  return axios.get(url);
}

export function createJourney(title, description, category_id) {
  const url = '/api/journeys'
  return axios.post(url, {
    title,
    description,
    category_id
  })
}

export function youtubeSearch(q) {
  const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const YOUTUBE_API_KEY = 'AIzaSyCapK2P3i5AERyaaRJ1JndnojwJ-QyMTeY';
  var url = new URL(YOUTUBE_URL);
  var params = {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: q,
    type: 'video',
    videoEmbeddable: true,
    maxResults: 50
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  return fetch(url)
}