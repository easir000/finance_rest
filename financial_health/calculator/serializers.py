# calculator/serializers.py
from rest_framework import serializers, viewsets
from .models import FinancialData

class FinancialDataSerializer(serializers.ModelSerializer):
    score = serializers.SerializerMethodField()

    class Meta:
        model = FinancialData
        fields = '__all__'

    def get_score(self, obj):
        return obj.calculate_score()
