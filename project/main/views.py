from django.shortcuts import render
from django.http import HttpResponse
from .forms import ScoreModelForm
from .models import Score
def index(req):
    return render(req, 'index.html')

def submission_of_score(req):
    if req.method == 'POST':
        post = req.POST
        form = ScoreModelForm(post or None)
        if form.is_valid():
            form.save()
        else:
            return HttpResponse('bad request default', status=400)
    else:
        return HttpResponse('')
    
def leaderboard(req):
    items = Score.objects.all()
    return render(req, 'leaderboard.html', {'items':items})