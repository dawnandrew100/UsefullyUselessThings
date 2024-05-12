from bs4 import BeautifulSoup
import requests as req
import pandas as pd

response = req.get("https://extension.umd.edu/resource/vegetable-planting-calendar/")

soup = BeautifulSoup(response.text, 'html.parser')

table = soup.find(lambda tag: tag.name=='table') 
rows = table.findAll(lambda tag: tag.name=='td')

col_names = {"Crop Name":"","Planting time and method":"","Harvest time":""}

df = pd.DataFrame(col_names, index=[0])
print(df)

start=0
end=3

for i in range(int(len(rows)/3)):
  df.loc[i] = rows[start:end]
  start=end
  end+=3
