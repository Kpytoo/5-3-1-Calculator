let military_press = document.querySelector("#military_press");
let deadlift = document.querySelector("#deadlift");
let bench_press = document.querySelector("#bench_press");
let squat = document.querySelector("#squat");

let military_40 = document.querySelector("#military_40");
let military_50 = document.querySelector("#military_50");
let military_60 = document.querySelector("#military_60");
let military_65 = document.querySelector("#military_65");
let military_70 = document.querySelector("#military_70");
let military_75 = document.querySelectorAll("#military_75");
let military_80 = document.querySelector("#military_80");
let military_85 = document.querySelectorAll("#military_85");
let military_90 = document.querySelector("#military_90");
let military_95 = document.querySelector("#military_95");

let deadlift_40 = document.querySelector("#deadlift_40");
let deadlift_50 = document.querySelector("#deadlift_50");
let deadlift_60 = document.querySelector("#deadlift_60");
let deadlift_65 = document.querySelector("#deadlift_65");
let deadlift_70 = document.querySelector("#deadlift_70");
let deadlift_75 = document.querySelectorAll("#deadlift_75");
let deadlift_80 = document.querySelector("#deadlift_80");
let deadlift_85 = document.querySelectorAll("#deadlift_85");
let deadlift_90 = document.querySelector("#deadlift_90");
let deadlift_95 = document.querySelector("#deadlift_95");

let bench_40 = document.querySelector("#bench_40");
let bench_50 = document.querySelector("#bench_50");
let bench_60 = document.querySelector("#bench_60");
let bench_65 = document.querySelector("#bench_65");
let bench_70 = document.querySelector("#bench_70");
let bench_75 = document.querySelectorAll("#bench_75");
let bench_80 = document.querySelector("#bench_80");
let bench_85 = document.querySelectorAll("#bench_85");
let bench_90 = document.querySelector("#bench_90");
let bench_95 = document.querySelector("#bench_95");

let squat_40 = document.querySelector("#squat_40");
let squat_50 = document.querySelector("#squat_50");
let squat_60 = document.querySelector("#squat_60");
let squat_65 = document.querySelector("#squat_65");
let squat_70 = document.querySelector("#squat_70");
let squat_75 = document.querySelectorAll("#squat_75");
let squat_80 = document.querySelector("#squat_80");
let squat_85 = document.querySelectorAll("#squat_85");
let squat_90 = document.querySelector("#squat_90");
let squat_95 = document.querySelector("#squat_95");

let roundToFive = (num) => {
    return Math.round(num / 5) * 5;
};

military_press.addEventListener("keyup", (e) => {
    military_40.textContent = roundToFive((e.target.value * 0.40)).toString();
    military_50.textContent = roundToFive((e.target.value * 0.50)).toString();
    military_60.textContent = roundToFive((e.target.value * 0.60)).toString();
    military_65.textContent = roundToFive((e.target.value * 0.65)).toString();
    military_70.textContent = roundToFive((e.target.value * 0.70)).toString();
    military_75[0].textContent = roundToFive((e.target.value * 0.75)).toString();
    military_75[1].textContent = roundToFive((e.target.value * 0.75)).toString();
    military_80.textContent = roundToFive((e.target.value * 0.80)).toString();
    military_85[0].textContent = roundToFive((e.target.value * 0.85)).toString();
    military_85[1].textContent = roundToFive((e.target.value * 0.85)).toString();
    military_90.textContent = roundToFive((e.target.value * 0.90)).toString();
    military_95.textContent = roundToFive((e.target.value * 0.95)).toString();
});

deadlift.addEventListener("keyup", (e) => {
    deadlift_40.textContent = roundToFive((e.target.value * 0.40)).toString();
    deadlift_50.textContent = roundToFive((e.target.value * 0.50)).toString();
    deadlift_60.textContent = roundToFive((e.target.value * 0.60)).toString();
    deadlift_65.textContent = roundToFive((e.target.value * 0.65)).toString();
    deadlift_70.textContent = roundToFive((e.target.value * 0.70)).toString();
    deadlift_75[0].textContent = roundToFive((e.target.value * 0.75)).toString();
    deadlift_75[1].textContent = roundToFive((e.target.value * 0.75)).toString();
    deadlift_80.textContent = roundToFive((e.target.value * 0.80)).toString();
    deadlift_85[0].textContent = roundToFive((e.target.value * 0.85)).toString();
    deadlift_85[1].textContent = roundToFive((e.target.value * 0.85)).toString();
    deadlift_90.textContent = roundToFive((e.target.value * 0.90)).toString();
    deadlift_95.textContent = roundToFive((e.target.value * 0.95)).toString();
});

bench_press.addEventListener("keyup", (e) => {
    bench_40.textContent = roundToFive((e.target.value * 0.40)).toString();
    bench_50.textContent = roundToFive((e.target.value * 0.50)).toString();
    bench_60.textContent = roundToFive((e.target.value * 0.60)).toString();
    bench_65.textContent = roundToFive((e.target.value * 0.65)).toString();
    bench_70.textContent = roundToFive((e.target.value * 0.70)).toString();
    bench_75[0].textContent = roundToFive((e.target.value * 0.75)).toString();
    bench_75[1].textContent = roundToFive((e.target.value * 0.75)).toString();
    bench_80.textContent = roundToFive((e.target.value * 0.80)).toString();
    bench_85[0].textContent = roundToFive((e.target.value * 0.85)).toString();
    bench_85[1].textContent = roundToFive((e.target.value * 0.85)).toString();
    bench_90.textContent = roundToFive((e.target.value * 0.90)).toString();
    bench_95.textContent = roundToFive((e.target.value * 0.95)).toString();
});

squat.addEventListener("keyup", (e) => {
    squat_40.textContent = roundToFive((e.target.value * 0.40)).toString();
    squat_50.textContent = roundToFive((e.target.value * 0.50)).toString();
    squat_60.textContent = roundToFive((e.target.value * 0.60)).toString();
    squat_65.textContent = roundToFive((e.target.value * 0.65)).toString();
    squat_70.textContent = roundToFive((e.target.value * 0.70)).toString();
    squat_75[0].textContent = roundToFive((e.target.value * 0.75)).toString();
    squat_75[1].textContent = roundToFive((e.target.value * 0.75)).toString();
    squat_80.textContent = roundToFive((e.target.value * 0.80)).toString();
    squat_85[0].textContent = roundToFive((e.target.value * 0.85)).toString();
    squat_85[1].textContent = roundToFive((e.target.value * 0.85)).toString();
    squat_90.textContent = roundToFive((e.target.value * 0.90)).toString();
    squat_95.textContent = roundToFive((e.target.value * 0.95)).toString();
});


