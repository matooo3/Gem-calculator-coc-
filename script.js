function calculate (cost, mult, duration, worker) {
    let costPerHour = 0;
    if(isNaN(duration) || duration == 0) { /*Buch hat duration 0 oder Nan (instant)*/
        costPerHour = cost / mult;
    } else {
        costPerHour = cost / (worker * (mult * duration - duration));
    }
    
    return costPerHour;
}

function calcResult () {
    let cost1 = document.querySelector("#cost1").value;
    let multiplicator1 = document.querySelector("#multiplicator1").value;
    let duration1 = document.querySelector("#duration1").value;
    let workers1 = document.querySelector("#workers1").value;

    let cost2 = document.querySelector("#cost2").value;
    let multiplicator2 = document.querySelector("#multiplicator2").value;
    let duration2 = document.querySelector("#duration2").value;
    let workers2 = document.querySelector("#workers2").value;

    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2"); 
    result1 = calculate(cost1, multiplicator1, duration1, workers1);
    result2 = calculate(cost2, multiplicator2, duration2, workers2);
 
    document.getElementById("result1").innerHTML = "Cost: " + result1 + " (Gems per hour)";
    document.getElementById("result2").innerHTML = "Cost: " + result2 + " (Gems per hour)";
    
    if (isNaN(result1) && isNaN(result2)) {
        document.getElementById("result3").innerHTML = "=> Please enter something" ;
        return;
    }

    if (result1 == result2) {
        document.getElementById("result3").innerHTML = "=> Both are the same" ;
        return;
    }

    if (result1 < result2) {
        document.getElementById("result3").innerHTML = "=> Item 1" ;
    } else {
        document.getElementById("result3").innerHTML = "=> Item 2" ;
    }
}