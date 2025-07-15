export default function timeCalculation(shipmentTypeCost, driverCost, travelDistance) {
    let dCost = driverCost;
    let remainingDistance = travelDistance;
    let totalCost = 0

    const slab1 = 250;
    const slab2 = 500;
    const slab3 = 1000;

    try {
        if(remainingDistance > slab1) {
            remainingDistance -= slab1;
            totalCost += (dCost * slab1);
            dCost -= 1;
        } else {
            totalCost += (dCost * remainingDistance);
            throw new Error("done")
        }

        if(remainingDistance > slab2) {
            remainingDistance -= slab2;
            totalCost += (dCost * slab2);
            dCost -= 1;
        } else {
            totalCost += (dCost * remainingDistance);
            throw new Error("done")
        }

        if(remainingDistance > slab3) {
            remainingDistance -= slab3;
            totalCost += (dCost * slab3);
            dCost -= 1;
        } else {
            totalCost += (dCost * remainingDistance);
            throw new Error("done")
        }

        totalCost += (dCost * remainingDistance);

        throw new Error("done")

    } catch (error) {
        return {totalTimeCalculationCost: totalCost + (travelDistance * shipmentTypeCost)}
    }
}

// export default function calculateTotalCost(shipmentTypeCost, driverCost, travelDistance) {
//     const slabs = [250, 500, 1000];
//     let remainingDistance = travelDistance;
//     let totalCost = 0;
//     let currentCost = driverCost;
//
//     for (let slab of slabs) {
//         if (remainingDistance > slab) {
//             totalCost += slab * currentCost;
//             remainingDistance -= slab;
//             currentCost -= 1;
//         } else {
//             totalCost += remainingDistance * currentCost;
//             remainingDistance = 0;
//             break;
//         }
//     }
//
//     // If distance is still left after slabs
//     if (remainingDistance > 0) {
//         totalCost += remainingDistance * currentCost;
//     }
//
//     return {
//         totalTimeCalculationCost: totalCost + (travelDistance * shipmentTypeCost)
//     };
// }
