## Making HTTP requests
This pre-class work can be quite long if you have had no previous exposure to
HTML and web programming.  In this case you are encouraged to find someone with
some prior experience and work together.  (Conversely, if you do have any prior
experience, then you are encouraged to find someone with no web experience to
help them!)

### HTML Forms
The first time that you usually encounter an HTML request (other than a GET
request) is in an HTML form.  The following (freely-available) short course uses
active learning to help you understand HTML forms:
https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms

For this session you will need to work through the following guides:
1. Your first HTML form
2. How to structure an HTML form
3. The native form widgets
4. Sending form data

After which you should feel comfortable tackling question 1.

### Python HTTP requests
However, we can also query the web through a python program.  There are many
ways of making http requests programmatically.  A nice library is the `requests`
library.  You can install it using:
```bash
pip3 install requests
```
Now work through [the guide to HTTP requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

And then read through the [quickstart for python requests](http://docs.python-requests.org/en/master/user/quickstart/).

### JSON
The web services listed below all return information in a format known as JSON.
Fortunately for us it is straightforward to turn the JSON back into standard
python objects that you are already familiar with.

As an example (borrowed from the requests tutorial), here is a call to github,
which is then read into a python list of python dictionaries:
```python3
>>> import requests
>>> r = requests.get('https://api.github.com/events')
>>> r.json()
[{u'repository': {u'open_issues': 0, u'url': 'https://github.com/...
```

## Questions

**Everyone must complete question 1, and then find out which remaining question
they need to answer using the following python code:**

Terminal
```bash
python3 utils/pcw_selector.py Terminal
```

TKinter
```bash
python3 utils/pcw_selector.py TKinter
```

**Be sure to bring both your HTML form, and your (single) python program to class,
and be ready to paste either of them in as a poll response.**

### 1. Kanban form

Build on your work from the previous session in which you designed a basic
Kanban website. For today's class you need to build a small HTML form which
will allow you to write a short description of the task which you want to add
to the board.

### 2. Pokemon

Here is an example link to return Pokemon data in JSON format (https://pokeapi.co/api/v2/pokemon/charmeleon). You can see the documentation of Pokemon API at https://pokeapi.co/docs/v2.

Choose your favorite Pokemon, and write a short Python program which queries the Pokemon API and then prints its base statistics (Attack, Defense, HP, Sp. Atk, Sp. Def, Speed)
in plain text:
```text
Charmeleon
Attack: 64
Defense: 58
HP: 58
Sp. Atk: 80
Sp. Def: 65
Speed: 80
```

### 3. Crypto Exchange

Here is an example link to return crypto currency data in JSON format:
https://poloniex.com/public?command=returnTicker

Write a short Python program which queries the Poloniex Exchange API and then
prints out a list of the latest trading prices in plain text:
```text
BTC_OMNI : 0.00005140
BTC_ETH : 0.010150000
BTC_ETC : 0.00296001
```
https://poloniex.com/support/api/

### 4. What3words

Here is an example link to convert a latitude and longitude to a 3 word address in JSON format:
https://api.what3words.com/v3/convert-to-3wa?key=MY-API-KEY&coordinates=51.521251%2C-0.203586&language=en&format=json

Create a free developer account [here](https://accounts.what3words.com/login?redirection=/create-api-key) and choose an interesting location.

Write a short Python program which queries the what3words API and then
prints out the nearest place and 3 word address in this format:

```text
Latitude: 51.521251
Longitude:   -0.203586
Nearest Place:       Bayswater, London
3 word address:       filled.count.soap
```
More documentation can be found [here](https://developer.what3words.com/public-api/docs#convert-to-3wa).

### 5. Weather from the Meteorologisk Institute

Write a short Python program to query the weather for a particular location you care 
about (eg. where you're currently staying, or your home town).

The Norwegian Meteorological Institute provides all weather predictions for free.
See here for some examples:
https://frost.met.no/examples2.html
Depending on the requests you are interested in making, you might need to 
register an account:
https://frost.met.no/howto.html
If you're not sure which endpoint is a good one to query, here is a suggestion:
https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/data/get_complete
But please feel free to look around and see if there are any more interesting options!

### (Optional) Public APIs
Browse the following repo:
https://github.com/public-apis/public-apis
Find an interesting application, and bring it to class!  (If it works well, it will replace one of the above questions for students to do next semester!)
# minerva-kanban-board
