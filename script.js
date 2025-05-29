let military_press = document.querySelector("#military_press");
let deadlift = document.querySelector("#deadlift");
let bench_press = document.querySelector("#bench_press");
let squat = document.querySelector("#squat");


military_press.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});

deadlift.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});

bench_press.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});

squat.addEventListener("keyup", (e) => {
    console.log(e.target.value);
});
