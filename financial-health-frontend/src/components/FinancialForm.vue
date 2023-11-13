// financialform.vue
<template>
  <div>
    <form @submit.prevent="saveFinancialData">
      <label for="income">Income:</label>
      <input v-model.number="income" type="number" required />

      <label for="expenses">Expenses:</label>
      <input v-model.number="expenses" type="number" required />

      <label for="debt">Debt:</label>
      <input v-model.number="debt" type="number" required />

      <label for="savings">Savings:</label>
      <input v-model.number="savings" type="number" required />

      <button type="submit">Save Financial Data</button>
    </form>

    <div v-if="financialData">
      <p>Financial Health Score: {{ financialData.score }}</p>
      <div>
        <Bar :data="chartData" :options="chartOptions"></Bar>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Bar } from 'vue-chartjs';

export default {
  data() {
    return {
      income: 0,
      expenses: 0,
      debt: 0,
      savings: 0,
      financialData: null,
      chartData: {},
      chartOptions: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    };
  },
  components: {
    Bar: Bar, // Adjusted the component name here
  },
  methods: {
    saveFinancialData() {
      console.log('Saving financial data...');
      axios.post('http://localhost:8000/api/financialdata/', {
        income: this.income,
        expenses: this.expenses,
        debt: this.debt,
        savings: this.savings,
      })
      .then(response => {
        this.financialData = response.data;
        this.calculateScore();
      })
      .catch(error => {
        console.error('Error saving financial data:', error);
      });
    },
    calculateScore() {
      if (this.financialData) {
        axios.get(`http://localhost:8000/api/financialdata/${this.financialData.id}/`)
          .then(response => {
            this.financialData.score = response.data.calculate_score;
            this.updateChartData();
          })
          .catch(error => {
            console.error('Error calculating score:', error);
          });
      }
    },
    updateChartData() {
      this.chartData = {
        labels: ['Financial Health Score'],
        datasets: [
          {
            label: 'Score',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [this.financialData.score],
          },
        ],
      };
    },
  },
};
</script>

<!-- financialform.vue -->
<style scoped>
  /* Container styles */
  div {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }

  /* Form styles */
  form {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
  }

  /* Financial Health Score styles */
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  /* Chart styles */
  canvas {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
</style>
