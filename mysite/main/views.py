from django.shortcuts import render
from django.shortcuts import redirect
# Create your views here.
def index(req):
    return render(req, 'index.html')

def not_a_rickroll(req):
    return redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')