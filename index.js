function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // Free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat $25 fare
    } else {
        return "cannot travel that far"; // Over 2500 feet
    }
}


console.log(distanceFromHqInBlocks(43)); // Output: 1
console.log(distanceFromHqInFeet(50)); // Output: 2112
console.log(distanceTravelledInFeet(43, 48)); // Output: 1320
console.log(calculatesFarePrice(34, 32)); // Output: 2.56
console.log(calculatesFarePrice(10, 60)); // Output: "cannot travel that far"

