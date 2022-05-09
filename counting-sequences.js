import fs from 'fs';
/* Set file to test by changing file path of txtPath const below */
const txtPath = './texts/sample1.txt';

/* Readfile to make string of .txt file (needs to be modified later to set whichever path user chooses) */
const countSequences = fs.readFile(`${txtPath}`, 'utf-8', (err, data) => {
    /* If error in reading file, report it. Otherwise continue. */
    if(err) {
        logger.error('error: ', err);
        throw err;
    } 


    /* Make file into string and all lowercase letters and remove returns/newlines */
    /* Need to figure out regex to filter out non-alphabet characters and special characters */
    let txtString = data.toString().toLowerCase().replace(/(\r\n)/gm, " ");
    // txtString = txtString.replace(/[^a-z0-9]+/g, "");
    // console.log(txtString);


    /* Convert string of txt file to words */
    let words = txtString.split(/\b/);
    words = words.filter(entry => entry.trim() != '');
    // console.log(words);


    /* Find counts of words (not sequences) in the file */
    const wordCounts = {};
    for(var i = 0; i < words.length; i++) {
        // get counts of words
        wordCounts["" + words[i]] = (wordCounts["" + words[i]] || 0) + 1;
    }
    // console.log(wordCounts);


    /* Make 3 word sequences from words array */
    let allSubstrings = [];
    let subStr = [];
    let startInd = 0;
    let endInd = 3;
    const subs = (input) => {
        subStr = input.slice(startInd, endInd);
        // console.log(subStr);
        allSubstrings.push(subStr);
        return subStr;
    }
    words.forEach(() => {  
        subs(words);
        startInd++
        endInd++
    });
    /* Set allSubstrings length 2 short of total to only return 3 word sequences */
    allSubstrings.length = allSubstrings.length - 2;
    // console.log(allSubstrings);


    /* Find counts of sequences in file */
    const seqCounts = {};
    for(var i = 0; i < allSubstrings.length; i++) {
        // get counts of sequences
        seqCounts["" + allSubstrings[i]] = (seqCounts["" + allSubstrings[i]] || 0) + 1;
        // need to get it to sort counts most to least

        // need to have only top 100 results returned in seqCounts array

    }
    console.log(seqCounts);
    
});
countSequences;

// TO DO: See Readme
