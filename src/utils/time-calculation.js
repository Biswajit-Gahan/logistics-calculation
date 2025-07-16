export default function calculateTotalCost(shipmentTypeCost, driverCost, travelDistance) {
    const slabs = [250, 500, 1000];
    let remainingDistance = travelDistance;
    let totalCost = 0;
    let currentCost = driverCost;

    for (let slab of slabs) {
        if (remainingDistance > slab) {
            totalCost += slab * currentCost;
            remainingDistance -= slab;
            currentCost = currentCost > 0 ? --currentCost : 0
        } else {
            totalCost += remainingDistance * currentCost;
            remainingDistance = 0;
            break;
        }
    }

    if (remainingDistance > 0) {
        totalCost += remainingDistance * currentCost;
    }

    return {
        totalTimeCalculationCost: totalCost + (travelDistance * shipmentTypeCost)
    };
}
