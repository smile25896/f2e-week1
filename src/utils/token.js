// import axiosInstance from '../config';

export function storeToken(token) {
  localStorage.setItem('token', token);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function removeToken() {
  localStorage.removeItem('token');
  // axios.defaults.headers.common['Authorization'] = null;
}

export function getToken() {
  return localStorage.getItem('token');
}