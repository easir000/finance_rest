// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import FinancialForm from '@/components/FinancialForm.vue';  // Update the path accordingly

const routes = [
  { path: '/', component: FinancialForm },
  // Add more routes for authentication, registration, etc.
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
