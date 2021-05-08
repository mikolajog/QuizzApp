
from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, UserView

app_name = 'users'

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('whoami/', UserView.as_view(), name='whoami')
]