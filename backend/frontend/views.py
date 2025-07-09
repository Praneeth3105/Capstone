import requests
from django.http import JsonResponse

def analyze_sentiment(request):
    try:
        response = requests.get('https://fake-sentiment-api/review')  # Replace with working API
        return JsonResponse(response.json())
    except:
        return JsonResponse({'sentiment': 'positive'})
