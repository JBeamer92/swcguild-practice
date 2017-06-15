var sentence = "I love learning software development";

for (var i = 0; i < sentence.length; i++) {
    if(sentence[i] !== " ") {
        console.log(sentence[i]);
    }
}

function getDouble(num) {
	return num * 2;
}

getDouble(6);
