from django.shortcuts import render

# Create your views here.
def home(request , *args , **kwargs):
    return render(request , "index.html" , {})
def time(request , *args , **kwargs):
    return render(request , "schedule.html" , {})
def palind(request , *args , **kwargs):
    return render(request , "palindrome.html" , {})
def sch(request , *args , **kwargs):
    return render(request , "schedule.html" , {})
def stpw(request , *args , **kwargs):
    return render(request , "stopw.html" , {})
def tmpc(request , *args , **kwargs):
    return render(request , "tempconv.html" , {})

