
from django.shortcuts import render, redirect

import os

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def about(request):
    return render(request, 'core/about.html')


def contact(request):
    if request.method == "POST":
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        email = request.POST.get('email')
        join = request.POST.get('join')
        event = request.POST.get('event')
        comment = request.POST.get('comment')
    
        # where file is saved (got help from online on this line of code)
        file_path = os.path.join('form_submissions', 'contact_data.txt')

        # continue adding contact info into same file
        no_input = '**No User Input**'  # output if someone doesn't fill in an optional line
        with open(file_path, 'a') as outfile:
            outfile.write('Name: {} {}\n'.format(fname, lname))     # required
            outfile.write('Email: {}\n'.format(email))              # required

            if join == "":
                outfile.write('Joining Coding United: {}\n'.format(no_input)) # seems radio auto outputs "none" if nothing selected
            else:
                outfile.write('Joining Coding United: {}\n'.format(join))
            
            if event == "":
                outfile.write('Interested Event: {}\n'.format(no_input))
            else:
                outfile.write('Interested Event: {}\n'.format(event))
            
            if comment == "":
                outfile.write('Comment: {}\n'.format(no_input))
            else:
                outfile.write('Comment: {}\n'.format(comment))
            
            outfile.write('----\n')

        return redirect('/')  # redirect to home page after successful POST

    return render(request, 'core/contact.html')

def errorPage(request, exception):
    return render(request, 'core/404.html', status=404)

