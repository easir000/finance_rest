# calculator/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FinancialDataViewSet, tasks_api  # Import tasks_api here

router = DefaultRouter()
router.register(r'financial-data', FinancialDataViewSet, basename='financial-data')

urlpatterns = [
    path('', include(router.urls)),
    path('api/tasks/', tasks_api, name='tasks_api'),  # Use tasks_api directly without 'views.'
]
