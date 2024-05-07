function countDown(num) {
    const counter = setInterval(function () {
        num--;
        if (num === 0) {
            clearInterval(counter)
            console.log("DONE!");
        }
        else {
            console.log(num);
        }
    }, 1000)
}

function randomGame() {
    let tries = 0;
    let num;
    const rng = setInterval(function () {
        num = Math.random();
        tries++;
        if (num > 0.75 && tries > 1) {
            clearInterval(rng);
            console.log(`Took ${tries} tries.`)
        }
        else if (num > 0.75 && tries === 1) {
            clearInterval(rng);
            console.log(`Took ${tries} try.`)
        }
    }, 1000)
}