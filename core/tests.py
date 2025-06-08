from django.test import TestCase
from django.http import HttpRequest
from core.views import home

# Create your tests here.

# test to check if the page rendered
class TestCases(TestCase):
    def test_call_to_render(self):
        request = HttpRequest()
        response = home(request)
        self.assertEqual(response.status_code, 200)