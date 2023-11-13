import { createApp } from 'vue';
import App from './App.vue';
import FinancialForm from './components/FinancialForm.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

// 1. Create the router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FinancialForm },
    // Add more routes as needed
  ],
});

// 2. Create the store
const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      accessToken: null,
    };
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
    authenticateUser({ commit }, credentials) {
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

// 3. Create the app
const app = createApp(App);

// 4. Use plugins
app.use(router);
app.use(store);

// 5. Mount the app
app.mount('#app');
