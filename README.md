Project structure
-------------

```
data
    moves               - file that contains moves string
src                     - app source code
    classes             - contains core app classes
    main.js             - main app logic
    moves-extractor.js  - contains the logic for moves file extraction and conversion to integer array
test                    - unit tests
```

Set up project
-------------

* Run 'npm install' to install project dependencies
* Run 'npm run test' to run the tests
* Run 'npm run start' to run the program

Main objectives
-------------

* What is the position of the knight figure after executing all the moves in the attached file (data/moves)?
* What is the furthest point on the board from the initial position (0, 0) that the figure has ever been while executing the list of instructions?
* Are there any positions where x=y, excluding the initial position (0, 0)? If yes, which ones?
