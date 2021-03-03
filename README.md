# sunshine-app

## Style Guide for Components, Colors, Typefaces, Grid Style, and Screen Sizes

### Components
  - LocationSearchResults
  - Nav
  - Footer
  - Layout

### Colors
  - #1E1C45 Midnight
  - #39BCF6 Sky Blue
  - #FFB029 Sun Yellow
  - #FF6F1C Orange Ray
  - #FFDA1C Taxi Yellow
  - #FFFFFF White
  - #000000 Black
  - #6D6D6D Storm Cloud
  - #959595 Rain Cloud
  - #C9C9C9 Cloudy Grey
  - #E9E9E9 Misty Grey
  - #F2F2F2 White Smoke
  - #FFFFFF White

### Typefaces
  - H1 - Montserrat Bold 24 pt
  - H2 - Montserrat Bold 18 pt
  - H3 - Montserrat 18 pt
  - H4 - Montserrat Bold 14 pt
  - H5 - Montserrat 14 pt
  - H6 - Lato 12 pt
  - P - Montserrat 12 pt
  - Body - Lato 12 pt

### Grid style
  - 3-column Layout Grid 1
  - Margin 24px
  - Gutter 16 px

### Screens
  -iPhone 11 Pro, w: 375px x h: 812px

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
  - Onclick handler updates info panel
- #### Info Panel
  - Update text with onclick event on one of the buttons
  - Contextualize the text according to which button is clicked

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
