# NR_Challenge
Coding Assessment for NR 

## Goal - Create a function that when given text(s) will return a list of the 100 most common three word sequences.
Example: if ran against moby_dick.txt the first lines of the result would be:

the sperm whale - 85
the white whale - 71
of the whale - 67


## How to run this project (after pulling down project and npm install)
1. Open counting-sequences.js file
2. Change file path in "txtPath" constant set at top of file (sample .txt files in tests directory)
3. Open terminal in the NR_Challenge directory
4. Enter in terminal 
```
node counting-sequences.js
```


## What could be done next? 
- Need to get seqCounts object to sort counts highest to lowest.
- Need to have only top 100 results returned in seqCounts object.
- Figure out how to filter out special characters, parentheses, singlequotes (and likely more).
- Complete testing in counting-sequences.test.js.
- Refactor to break out readWords into smaller separate functions: 
    - Refactor to use more es6+ functionality
    - Refactor to improve performance (could be improved by the above)
- Set up app in Docker.
- 


## Known bugs or issues?
- Does not filter out special characters, parentheses, singlequotes (and more likely)
- Testing does not work at this time and would need to be completed 
