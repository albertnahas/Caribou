# Caribou - Destinations Search

Web application for finding the perfect travel destination for you, searching all places in the world from Wikivoyage database to retrieve the most suitable choices based on the user input filters.

Technologies used:

- ReactJs
- TypeScript
- Python
- Flask
- JSON
- other small libraries or packages

## How the webpage works?

The user could use the filters on the fields:
- region
- month
- weather
- themes

Themes are the activities or interests that the traveler user is looking for including:

- shopping
- modern
- sightseeing
- temples
- surfing
- diving
- skiing
- hiking
- family
- culture
- food
- museums
- nightlife

The user could also select the month and what kind of weather he's looking for and the app will check the probable climate of the destination region based on this period of the year and select the best fits. 

### Data

Our Database is basically a combinaction of JSON files extracted from Wikivoyage XML dumbps using specfic algorithms to parse the data and sort it in meaningful content, also, build the required relations between places and themes.

### API

The API is built with Python and Flask, with one endpoint /dest to retrieve the destinations with GET request having all the parameters

### Front-End

Front-End app based on ReactJS with TypeScript, built with vite, and designed with MaterialUI library to ensure unser friendly interfaces and seamless design.

## Possible improvements

As all applications this one can also be improved. Possible improvements:

- View city details and activities to do inside the cities
- Link with booking websites such as Airbnb, Booking.com, allowing users to book their staying on the spot
- Link with flights search APIs
- Provide more details and historical data about the city

## How to launch application

1. Copy the code from cliend directory or clone the code: `git clone https://github.com/albertnahas/Caribou.git`
2. Run `yarn` to install dependencies
3. Run `yarn dev` to start the project locally
4. For backend code located in server folder run `python server.py`
5. You are ready to go!