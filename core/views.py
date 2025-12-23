
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages 

import os

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')

def session(request):
    return render(request, 'core/session.html')

def faq(request):
    return render(request, 'core/faq.html')


def contact(request):
    if request.method == "POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        join = request.POST.get('join')
        event = request.POST.get('event')
        comment = request.POST.get('comment')
    
        # what will be sent to Club's email
        userSubmission = f"""
        Name: {fname} {lname}
        Email: {email}
        Joining Coding United: {join}
        Interested Event(s): {event}
        Comment: {comment}
        """

        subject = f"New Contact Form from {fname} {lname}"
        from_email = 'codingunited28@gmail.com'    # created gmail to use
        to_email = ['CodingUnitedClub@snhu.edu']   # sends to club's email address
        
        send_mail(
            subject,
            userSubmission,
            from_email,
            to_email,
            fail_silently=False,
        )

        messages.success(request, "Your email was sent successfully!")

        return redirect('contact')  # redirect back to contact page to pop up message
    return render(request, 'core/contact.html')

def errorPage(request, exception):
    return render(request, 'core/404.html', status=404)


