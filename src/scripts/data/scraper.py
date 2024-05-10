from bs4 import BeautifulSoup
import requests as req

response = req.get("https://extension.umd.edu/resource/vegetable-planting-calendar/")


soup = BeautifulSoup(response.text, 'html.parser')

