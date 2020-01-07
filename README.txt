
INSTRUCTIONS
------------
* This project requires Node.js to be installed on your machine

* Unzip the folder to a destination of your choosing

* Open Terminal or Command Prompt, and navigate to the folder's destination (for example - C:\Users\Robert\Desktop\[project_folder])

* Type in the terminal "yarn install" in order to install all the node_modules for the app. If Yarn is not installed globally, type "npm install" instead.

* You can build bundle.js by typing into the terminal "npm run build", or "yarn run build" 

* You can run the server off webpack by typing into the terminal "npm run dev-server" or "yarn run dev-server"

* Open your chosen internet browser, and navigate to "http://localhost:8080"

* As of writing, all cards are able to be dragged. Just left-click on any card, hold the button down, then drag and let go at a location of your choosing.

DEV NOTES
------------
* Although we have a local JSON file to insert the cards in the deck, a simple fetch function can be used inside getDeck() instead.
- This is only if we need to grab the JSON from a server, or hosted file. For the purposes of the assignment I created the deck manually and left it in /public

* I have added basic testing for the app; if I had more time I would have added Enzyme for more "snapshot" based tests for components.
- A moveToCell test was not implemented because the method was not finished as of writing, which is further explained below.

* I wanted to find a method to add styling to the cards, so that they flush better, rather than take up all it's neccesary space as you will see in the app.
- Deck shuffling was added successfuly, and cascaded accordingly. I felt this part of the assignment was completed.
- The idea of these cascade arrays is for the last card of the array to be the only draggable object, disabling the other ones and only enabling a card if it becomes the last of its array
- This was only for a first draft, down the line I'd have to find a way of being able to move multiple cards if certain criteria is found.
- I also intended to add CSS animations once functionality was completed, but never got that far

* One of the main roadblocks in this project was the drag-and-drop functionality. I have never used this library before, and had to take some time in order to implement it.
- Although the drag functionality works, the drop functionality does not seem to re-render the app. Which we need to in order for a card to be removed from a tableau.
- I believe the reason for this is to do with the implementation. Normally I would be able to use React-Redux and apply mapDispatchToProps in order to re-render a component once an action is dispatched.
- However, the components which involve the drag-and-drop library (card.js and freeCell.js), don't have Connect, because they require other HOC's in order for drags/drops to occur
- As a result, a lot of functionality which I intended to complete for a first draft is left unfinished.
- The Droppable capability was meant to be added for suit foundations, and cascades. Beyond that, the drop functionality would have checks and rules according to Solitare's rules.
- If given more time, I would find a way to be able to implement this React drag-and-drop library more seamlessly, and find a way in order for Redux actions to definitely re-render according to dispatch
- The drag and drop library is located here: https://react-dnd.github.io/react-dnd/about

* Start and Ending screens were not implemented as of writing since the bulk of the project has to do with the actual Solitare game itself
- I thought about implementing modals for start and ending screens, in order to not require a DOM to navigate.
- Button presses on these modals would enable certain actions to fire (like getting + shuffling the deck)

* Thank you for reading these notes. If you have any questions, feel free to e-mail sirvaloraxe@gmail.com