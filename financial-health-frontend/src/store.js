// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isAuthenticated: false,
    accessToken: null,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setAccessToken(state, token) {
      state.accessToken = token;
    },
  },
    actions: {
        authenticateUser({ commit, dispatch }, credentials) {
            axios.post('/api/token/', credentials)
                .then(response => {
                    commit('setAuthentication', true);
                    commit('setAccessToken', response.data.access);
                    localStorage.setItem('access_token', response.data.access);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
                    router.push({ path: router.currentRoute.value.query.redirect || '/' });
                })
                .catch(error => {
                    console.error('Error authenticating user:', error);
                });
        },
    },
});

export default store;
