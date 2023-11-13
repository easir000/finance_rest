# calculator/views.py
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import FinancialData
from .serializers import FinancialDataSerializer
from django.http import JsonResponse

class FinancialDataViewSet(viewsets.ModelViewSet):
    queryset = FinancialData.objects.all()
    serializer_class = FinancialDataSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['post'])
    def calculate_score(self, request, pk=None):
        financial_data = self.get_object()
        score = financial_data.calculate_score()
        return Response({'financial_health_score': score}, status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Add your task API view here
def tasks_api(request):
    # Your view logic goes here
    return JsonResponse({'message': 'This is the tasks API.'})
