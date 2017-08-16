var es = document.forms["evenStevens"];


function getResult(start, end, step) {
    // set arguments to input values
    start = start || es["numStart"].value;
    end = end || es["numEnd"].value;
    step = step || es["numStep"].value;

    // fill spans for description
    document.getElementById("inputStart").innerText = start;
    document.getElementById("inputEnd").innerText = end;
    document.getElementById("inputStep").innerText = step;

    // make array for results
    var results = [];

    for (var i = start; i <= end; i += step) {
        if (i % 2 === 0) {
            results.push(i);
        }

    }

    console.log(start);
    console.log(end);
    console.log(step);
    console.log(results);

    return;
}

getResult(2, 15, 3);
