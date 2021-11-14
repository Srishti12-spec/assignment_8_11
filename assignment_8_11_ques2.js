// Calculate power
function calculate_power(voltage, current) {
    let power = voltage * current;
    return power;
}

let voltage = 100;
let current = 100;

let power = calculate_power(voltage, current);
console.log(power);