export default function distanceCalculation(fuelCost, vehicleMileage, travelDistance) {
    let perKmCost = +fuelCost / +vehicleMileage;

    if(isNaN(perKmCost) || !isFinite(perKmCost)) perKmCost = 0;
    else perKmCost = perKmCost.toFixed(2);

    let totalCost = travelDistance * perKmCost
    totalCost = totalCost.toFixed(2);

    return {
        perKmCost, totalCost
    }
}