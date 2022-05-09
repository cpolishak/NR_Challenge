import { describe, it } from 'mocha';

/* need to set up imports for countSequences and test variations of it */
/* check countSequences function */
describe("Test 'countSequences' function in counting-sequences.js code", () => {
    it("should return an error if error reading .txt file", done => {
        countSequences('bad/text/path')
        done()
    })

    it("should return an object", done => {
        countSequences()
    })

    it("should have 3 word strings in each key", done => {
        countSequences()
    })


})