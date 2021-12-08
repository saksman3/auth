import { VOYAGER } from '@carto/react-basemaps';
import { API_VERSIONS } from '@deck.gl/carto';
import Cookies from 'js-cookie';

Cookies.set('token',"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRVNGNZTHAwaThjYnVMNkd0LTE0diJ9.eyJodHRwOi8vYXBwLmNhcnRvLmNvbS9hY2NvdW50X2lkIjoiYWNfeXhxZ3B1YiIsImlzcyI6Imh0dHBzOi8vYXV0aC5jYXJ0by5jb20vIiwic3ViIjoiTEtsUG9wSjdETVJNemQwUmRkenNOS29OdVo1UGZLdzVAY2xpZW50cyIsImF1ZCI6ImNhcnRvLWNsb3VkLW5hdGl2ZS1hcGkiLCJpYXQiOjE2Mzg0NDAzMzAsImV4cCI6MTYzODUyNjczMCwiYXpwIjoiTEtsUG9wSjdETVJNemQwUmRkenNOS29OdVo1UGZLdzUiLCJzY29wZSI6InJlYWQ6dG9rZW5zIHdyaXRlOnRva2VucyByZWFkOmltcG9ydHMgd3JpdGU6aW1wb3J0cyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsInBlcm1pc3Npb25zIjpbInJlYWQ6dG9rZW5zIiwid3JpdGU6dG9rZW5zIiwicmVhZDppbXBvcnRzIiwid3JpdGU6aW1wb3J0cyJdfQ.PbOslJH-CKvG5PYplgl2d_jtUOm3o7cd9Yq6ENZWl_xQsXJ_zZxjfQBuQAjoQjoG1VLKQgzE0e0S03ddaNRgCFYayrElflO04inSbmKcjQ-Hn4wIk1LDAQ0Fh67J-oJMwGj50yI1j0sx8ArKHgiiL93izq7hbrfBsqOhLYX5ZIv1EeNVXYOLJ8IS8zhxs3iASa_i_pnnxJm1--lOe0wQ6b7DTRFimeqJOPFBmU-P1sSJ3w7ZEl-5YNFGEoyWe8Pa8DHJozM14oz_dmTC0VNN8oRlDXP4gSOiMQ6W-4vo-UZ-AkATiMnYnkDe4Rm9Gy-dQkMmWPyO5VSXKbU_4wSvew")
export const initialState = {
  viewState: {
    latitude: -25.970323,
    longitude: 28.131103,
    zoom: 16,
    pitch: 0,
    bearing: 0,
    dragRotate: false,
  },

  basemap: VOYAGER,
  credentials: {
    apiVersion: API_VERSIONS.V3,
    apiBaseUrl: 'https://gcp-europe-west1.api.carto.com',
    accessToken:Cookies.get('token')
  },
  googleApiKey: '', // only required when using a Google Basemap,
  /*oauth: {
    domain: 'auth.carto.com',
    // Type here your application client id
    clientId: 'ZlfGYzhh3TTkkiGN1qldv8UjUnnvugDT',
    scopes: [
      'read:current_user',
      'update:current_user',
      'read:connections',
      'write:connections',
      'read:maps',
      'write:maps',
      'read:account',
      'admin:account',
    ],
    audience: 'carto-cloud-native-api',
    authorizeEndPoint: 'https://carto.com/oauth2/authorize', // only valid if keeping https://localhost:3000/oauthCallback
  },*/
  
};
