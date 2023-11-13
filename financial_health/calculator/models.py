# calculator/models.py
from django.db import models
from django.contrib.auth.models import User

class FinancialData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    income = models.FloatField()
    expenses = models.FloatField()
    debt = models.FloatField()
    savings = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def calculate_score(self):
        # Improved scoring logic based on your business requirements
        score = self.income - self.expenses + (self.savings * 0.5) - (self.debt * 0.8)
        return max(min(score, 100), 0)  # Ensure the score is between 0 and 100
