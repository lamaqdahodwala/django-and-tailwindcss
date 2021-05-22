from django.urls import path 
from . import views
urlpatterns = [ 
    path('', views.index, name='index'),
    path('submissionofscore', views.submission_of_score, name='submission'),
    path('leaderboard', views.leaderboard, name='leaderboard')
]