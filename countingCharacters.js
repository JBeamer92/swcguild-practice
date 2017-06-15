var portalString = "The cake is a lie.";

function countingCharacters(stringToCount) {
    console.log(stringToCount + ' has ' + stringToCount.length + ' characters.')
}

countingCharacters(portalString);


function countingCharacters2(stringToCount, character) {
    characterCount = 0;
    for (var i = 0; i < stringToCount.length; i++) {
        if (stringToCount[i] == character) {
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + character);
    console.log("Number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search) {
    var count = 0;
    var numChars = search.length;

    var lastIndex = str.length - numChars;
    for (var i = 0; i <= lastIndex; i++) {
        var current = str.substring(i, i + numChars);
        if (current == search) {
            count++;
        }
    }
    return count;
}
