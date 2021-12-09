from django.urls import path
from rest_framework import urlpatterns
from .views import WineViewSet
from rest_framework.routers import DefaultRouter
# from . import views

router = DefaultRouter()
router.register(r'', WineViewSet, basename='wines')
urlpatterns = router.urls

for url in urlpatterns:
    print(url)

# urlpatterns = [
#     path('', views.wine_list, name='wine_list'),
#     path('new', views.new_wine, name='new_wine'),
#     path('<int:wine_id>', views.wine_detail, name='wine_detail'),
#     path('<int:wine_id>/edit', views.edit_wine, name='edit_wine'),
#     path('<int:wine_id>/delete', views.delete_wine, name='delete_wine'),
# ]

# 1. pip install djangorestframework
# 2. settings.py (add to app: rest_framework)
# 3. App/URLS.py ( from .views import WineViewSet )
# 4. App/URLS.py ( from rest_framework import DefaultRouter )