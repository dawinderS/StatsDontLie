# Stats Don't Lie
Stats Don't Lie is an interactive, comprehensive data visualization of the top NBA players of the current season (2019-2020 fully updated). It utilizes the D3 library to create the bubble and bar charts, as well as the individual player statistics. Statistics vary between total efficiency, points, rebounds, assists etc. A fully functioning music player (containing some of the best songs of 2020) is also implemented.

## Technologies
- Javascript (ES6)
- HTML5
- CSS3
- D3.js
- Webpack

## Features (how is the data portrayed?)
The data is portrayed utlizing three different tools --> bubble chart, bar charts, and statistical infographics (all created using the D3.js library).

### D3 Bubble chart
The bubble chart consists of the top 30 players in total efficiency during the entire season, with each bubble representing a player and the bubble's radius representing their efficiency. To better illustrate to a user, the interior of each bubble contains player's rank compared to rest and their name while also being outlined with player's team color.

### D3 Bar graph
The bar graph consists of the top 15 players in the category the user clicks on to display. Categories include points, rebounds, assists, steals, and blocks. The y-axis labels the players from best to worst, and the x-axis gives a range of selected category (i.e. points). Each bar contains player's name inside and the categoty value outside the bar, and has the player's team.

### Statistic infographic
Clicking on either a player bubble or bar will display the player's complete statistics below the graph. User can click on multiple bubbles or bars to compare players.

### Additional feature - MUSIC
Checking statistics in silence is boring! In the navbar there is a fully functioning music player with the top hip-hop songs of 2020 so user can listen to some nice tunes while going over the data.
