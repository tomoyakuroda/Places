from django.shortcuts import render
from .models import Place
# Create your views here.
def index(request):

    places=Place.objects.all()
    # place1=Place()
    # place1.name='tom'
    # place1.location='london'
    # place1.img='bruges-belgium.png'

    # place2=Place()
    # place2.name='tom2'
    # place2.location='london'
    # place2.img='bruges-belgium.png'

    # place3=Place()
    # place3.name='tom3'
    # place3.location='london'
    # place3.img='bruges-belgium.png'
    # places=[place1,place2,place3]
    return render(request,'index.html',{'places':places})
