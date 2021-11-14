// Calculate the volume and surface area of cylinder

// Calculate volume of cylinder
function volume_of_cylinder(height, radius) {
    let volume = (22 / 7) * Math.pow(radius, 2) * height;
    return volume
}

// Calculate surface area of cylinder 
function surface_area_of_cylinder(height, radius) {
    let surface_area = (2 * (22 / 7) * radius) * (height + radius);
    return surface_area;
}

// height and radius of cylinder
let height = 20;
 let radius = 10;

let volume = volume_of_cylinder(height, radius);
console.log(volume);
let surface_area = surface_area_of_cylinder(height, radius);
console.log(surface_area);