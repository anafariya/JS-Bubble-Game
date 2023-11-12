Bubble Game
Welcome to the Bubble Game! This simple game is built using HTML, CSS, and JavaScript to create an engaging and interactive experience.

How to Play
Objective: Pop the bubble with the correct numerical value before the timer runs out to score points.

Game Elements:

Hit Value: The target number you need to hit.
Timer: The countdown timer representing the time you have left.
Score: Your current score.
Gameplay:

Bubbles with random numbers appear in the lower panel.
Click on the bubble with the number matching the "Hit Value" to score points.
The game ends when the timer reaches zero.
Technologies Used
HTML: The structure of the game is defined using HTML, including the layout and elements.
CSS: Styling is applied to create an appealing and user-friendly interface.
JavaScript: The game logic is implemented using JavaScript to handle interactions, timer, and scoring.
Event Bubbling
The concept of event bubbling plays a crucial role in this game. Event bubbling is a mechanism in which an event starts from the target element and bubbles up through its ancestors in the DOM tree. In this game:

Each bubble is an element within the #panelbottom container.
The click event listener is attached to the #panelbottom container.
When a bubble is clicked, the event bubbles up to the container, and the event handler checks if the clicked bubble matches the current "Hit Value."
This efficient use of event bubbling simplifies the code and improves performance by handling all bubble clicks in one central location.

Getting Started
To run the game locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/anafariya/bubble-game.git
Open the index.html file in your web browser.

Enjoy playing the Bubble Game!

Feel free to explore the code to understand how event bubbling is utilized for handling bubble clicks.

Author
Ana Fariya

Enjoy popping bubbles and improving your reaction time! If you have any feedback or suggestions, feel free to contact me.
