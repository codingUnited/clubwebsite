from django.test import TestCase

# Create your tests here.

# test to check if the page rendered
class TestCases(TestCase):
    def test_call_to_render(self):
        response = self.client.get('../home.html')
        self.assertEqual(response.status_code, 200)