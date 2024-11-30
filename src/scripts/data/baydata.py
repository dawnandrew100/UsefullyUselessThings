import requests as req
from bs4 import BeautifulSoup
import urllib.parse as urlparse
from urllib.parse import urlencode

def add_url_params(url, params):
    url_parts = list(urlparse.urlparse(url))
    query = dict(urlparse.parse_qsl(url_parts[4]))
    query.update(params)

    url_parts[4] = urlencode(query)
    query_url = urlparse.urlunparse(url_parts)
    return query_url

#payload = {'station':'AEB','parameter':'wtemp','StartDate':'2024-11-01','EndDate':'2024-11-29','outputtype':'1'}
#res = req.get("https://eyesonthebay.dnr.maryland.gov/contmon/ContMon.cfm", paramsid=payload)
#print(res.text)

with open('token.txt') as file:
    token = str(file.read()).strip()

urlid = 'https://www.ncei.noaa.gov/cdo-web/api/v2/data'
paramsid = {'datasetid':'GSOM','stationid':'GHCND:USC00010008', 'units':'standard', 'startdate':'2010-05-01', 'enddate':'2010-05-31'}
full_url = add_url_params(urlid, paramsid)
print(full_url)
res = req.get(full_url, headers={'token':token})
soup = BeautifulSoup(res.text, 'html.parser')
print(res.text)
