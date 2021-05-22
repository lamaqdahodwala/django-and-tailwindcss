from django.forms import ModelForm
from .models import Score
class ScoreModelForm(ModelForm):
    class Meta:
        model = Score
        fields = ['total', 'r1', 'r2', 'r3', 'r4', 'r5']