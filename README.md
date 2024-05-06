# Pokédex
This is a simple web application that functions as a Pokédex, allowing users to search for Pokémon by ID or name and display detailed information about them.

## Technologies Used:
* HTML: Provides the basic structure of the web page.
* CSS: Styles the layout and appearance of the page.
* JavaScript: Adds interactivity and functionality to the application.
* Bootstrap: Used for responsive design and pre-built components.
* PokéAPI: An external API used to retrieve Pokémon data.
# Files:
* index.html: The main HTML file, which displays the search bar, results area, and custom messages.
* script.js: Contains JavaScript code for handling user interactions, fetching Pokémon data, and displaying information.
* style.css: Defines the styles for elements like the header, cards, and messages.
## Functionality:
* Users can search for Pokémon by entering their ID number (1-1025) or name in the search bar.
* Clicking the "View" button triggers the search process.
* Clicking the "Clear" button resets the search and removes any displayed information.
* Upon successful search, the following information is displayed:
    * Pokémon image
    * Name
    * ID number (in the "Added" custom message)
    * Types
    * Abilities
    * Stats (HP, Attack, Defense, etc.)
* Custom messages are displayed based on the search result:
    * A custom "Added" message appears when a new Pokémon is successfully added.
    * "Pokédmon Not Found 😢" message appears when the searched for Pokédmon does not exist.
    * A custom "Already There" message appears when a previously added Pokémon is searched again.
## Additional Notes:
* The application utilizes the PokéAPI to retrieve Pokémon data.
* The code includes basic animation for the displayed Pokémon cards.
* The provided CSS includes responsive styles for smaller screen sizes and mobile devices.

This README.md provides a basic overview of the Pokédex web application and its functionalities. Feel free to explore the code further to understand the implementation details.

GitHub Repository: https://github.com/alberto-it/API-Pokemon
