# sunshine-app
## Diana Edit

## Components
  - LocationSearchResults
  - Nav
  - Footer
  - Layout

## Screens

### Landing Page (Home)
- #####  Logo Data Panel
  - Logo
  - Logo name Text
  - Tagline
- ##### Location Search bar Panel
- ##### Current Conditions (Weather data) Panel
- ##### "Learn More" link
### Results Page Main - Map
- ####  Location Search Panel
- ####  Location Search Results Panel
- ####  Map Panel
  - Has an overlay giving a summary of solar power according to season
  - Has a marker indicating the location results on the map
- ####  Interactive Overlay
  - Has a drag handle to pull up
  - Displays 3 Navigation buttons: Sunscore, Savings, Impact

### Results Page Main - Map and Info overlay
  - map and location search part of Layout

### Results Page - Sun Score, Savings, Impact overlay
- #### Button Panel
  - onclick handler updates info panel
- #### Info Panel
  - update text with onclick event on one of the buttons
  - Contextualize the text according to which button clicked

## Technical Challenges
- #### Google maps API
  - restricting search context
  - integrating with React framework while maintaining API key security

- #### Map info overlay
  - integrating the data with the map API functionality

## Technical Challenges
- #### Implementing the Results Overlay
  - CSS for triggering the swipe
  - Simpler to have the buttons trigger the overlay to slide up
  - How to position the Info screen to be an overlay on the main Results screen
- #### Implementing CSS
  - Alignment of components is tricky and time consuming. Can delay development of functional code.
