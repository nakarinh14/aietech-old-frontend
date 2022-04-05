import requests
from bs4 import BeautifulSoup

url = "http://aimomics.org/"
html = requests.get(url).content
print(html)
soup = BeautifulSoup(html, "html.parser")

# Find all <a> in your HTML that have a not null 'href'. Keep only 'href'.
links = [a["href"] for a in soup.find_all("a", href=True)]
print(links)