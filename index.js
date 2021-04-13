
function superbowlWin(record) {
    let foundRecord = record.find(function(r){
        return r.result === "W" })
        if (foundRecord) {
            return foundRecord.year
        } else {
            return undefined
        }
}

// if (record.result === "W") {
//     return record.year
// } else {
//     return undefined
// }

// *Receives 1 argument, an Array of JavaScript Objects 

// * Each object has two properties: year and result -- Use find() to test each Object to see if the result is "W" — a win! 

// * superbowlWin() should return the year when the win occurred (if it occurred at all!). 

// * If no win is found, it should return, sadly, undefined