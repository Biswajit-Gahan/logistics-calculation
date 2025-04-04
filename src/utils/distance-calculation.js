export default function distanceCalculation(fuelCost, vehicleMileage, travelDistance) {
    // fuelCost = +fuelCost;
    // vehicleMileage = +vehicleMileage;
    // travelDistance = +travelDistance;
    //
    // let perKmCost = fuelCost / vehicleMileage;
    //
    // if(!isFinite(perKmCost)) perKmCost = 0;
    // else perKmCost = perKmCost.toFixed(2);
    //
    // let totalDistanceCost = travelDistance * perKmCost
    // totalDistanceCost = +totalDistanceCost.toFixed(2);

    let perKmCost = +fuelCost / +vehicleMileage;

    if(!isFinite(perKmCost)) perKmCost = 0;
    else perKmCost = +perKmCost.toFixed(2);

    let totalDistanceCost = +(+travelDistance * +perKmCost).toFixed(2);

    return {
        // totalDistanceCost
        totalDistanceValue: totalDistanceCost
    }
}