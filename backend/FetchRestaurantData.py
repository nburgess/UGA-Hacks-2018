#!/usr/bin/python2.7

import sys,os
from pyzomato import Pyzomato
import json
import requests

textFile = open("output.txt", "w")


APIKey = "ce84c151c3bbfe25dd4c8a29f9da5365"

p = Pyzomato(APIKey)

#print(p.search(q="Athens", cuisines="American", count="50"))

#cityInfo = str(p.getCityDetails(q="Athens"))

#textFile.write(cityInfo)
#textFile.close()

#with open('data.txt', 'w') as outfile:
#    json.dump(data, outfile)

#p.getCategories()


url = 'https://developers.zomato.com/api/v2.1/locations?'
payload = open("request.json")
headers = {'content-type': 'application/json', 'Accept-Charset': 'UTF-8'}
r = requests.post(url, headers={'user-key':APIKey, 'query':'Athens' })
if r.ok:
	with open('request.json','w') as outfile:
		json.dump(r.json(),outfile)
