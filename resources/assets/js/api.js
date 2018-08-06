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

export function loadInitState() {
  return Promise.all([
    getCategories(),
    getJourneyObjectTypes()
  ]).then(([categoriesResp, journeyObjectTypesResp]) => ({
    data: {
      categories: categoriesResp.data,
      journeyObjectTypes: journeyObjectTypesResp.data
    }
  }))
}


export function getCategories() {
  var url = '/api/categories';
  return axios.get(url);
}

export function getJourneyObjectTypes() {
  const url = '/api/journeys/objects/types';
  return axios.get(url);
}

export function getJourneys(category_id) {
  const url = '/api/journeys';
  return axios.get(url, {
    params: {
      category_id
    }
  });
}

export function createJourney(title, description, category_id) {
  const url = '/api/journeys'
  return axios.post(url, {
    title,
    description,
    category_id
  })
}

export function updateJourney(journey) {
  const url = `/api/journeys/${journey.id}`
  return axios.put(url, {
    ...journey
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

export function storeJourneyObject(object_type_id, object_id, journey_id) {
  const url = '/api/journeys/objects'
  return axios.post(url, {
    object_type_id,
    object_id,
    journey_id
  })
}

export function removeJourneyObject(id) {
  const url = `/api/journeys/objects/${id}`
  return axios.delete(url)
}

export function removeJourney(id) {
  const url = `/api/journeys/${id}`
  return axios.delete(url)
}