# Stats Don't Lie
[See live site here](https://dawinders.github.io/StatsDontLie/)

Stats Don't Lie is an interactive, comprehensive data visualization of the top NBA players of the current season (2019-2020 fully updated). It utilizes the D3 library to create the bubble and bar charts, as well as the individual player statistics. Statistics vary between total efficiency, points, rebounds, assists, etc. A fully functioning music player (containing some of the best songs of 2020) is also implemented.

![main](https://user-images.githubusercontent.com/58091313/79517684-c107ea00-8003-11ea-9fc4-55dc353be9be.png)
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

![bubblegraph](https://user-images.githubusercontent.com/58091313/79517737-ec8ad480-8003-11ea-83cb-d6cd9d21a85e.png)

### D3 Bar graph
The bar graph consists of the top 15 players in the category the user clicks on to display. Categories include points, rebounds, assists, steals, and blocks. The y-axis labels the players from best to worst, and the x-axis gives a range of selected category (i.e. points). Each bar contains player's name inside and the categoty value outside the bar, and is outlined with the player's team color.

![bargraph](https://user-images.githubusercontent.com/58091313/79519240-26f67080-8008-11ea-8778-cef26bda4aea.gif)

### Statistic infographic
Clicking on either a player bubble or bar will display the player's complete statistics below the graph. User can click on multiple bubbles or bars to compare players.
- using scrollBy, clicking on player bar automatically scrolls screen down to allow user to see the infographic smoothly
- see bar graph visual above to see infographic design and implementation

### Additional feature - MUSIC
Checking statistics in silence is boring! In the navbar there is a fully functioning music player with the top hip-hop songs of 2020 so user can listen to some nice tunes while going over the data.

## Code Snippets
#### Bar graph switching
- rendered selected category graph transition and changed selected category button visual using simple vanilla DOM & CSS

![barCode](https://user-images.githubusercontent.com/58091313/79520481-d08b3100-800b-11ea-9062-63d96f4286e6.png)
#### Bubble graph creation
- Rendered bubbles of top 30 efficiency players using json data and creating rank based on order of player objs array

![bubbleCode](https://user-images.githubusercontent.com/58091313/79520892-ac7c1f80-800c-11ea-9f03-c0c755881508.png)
