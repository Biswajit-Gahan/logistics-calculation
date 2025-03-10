function getAveragePalletWeight(vehicleMaxLoadCapacity, palletSpaceInVehicle) {
    let palletWeight = vehicleMaxLoadCapacity / palletSpaceInVehicle;
    if(!isFinite(palletWeight)) return 0;
    return palletWeight;
}

function getMedianAveragePalletWeight(averagePalletWeight, palletMaxLoadCapacity) {
    let medianPalletWeight = (averagePalletWeight + palletMaxLoadCapacity) / 2;
    if(!isFinite(medianPalletWeight)) return 0;
    return medianPalletWeight;
}

function getWeightCostPerKg(vehicleMaxLoadCapacity, totalCostOfVehicleLoadCapacity) {
    let costPerKg = totalCostOfVehicleLoadCapacity / vehicleMaxLoadCapacity;
    if(!isFinite(costPerKg)) return 0;
    return costPerKg;
}

function getWeightSlabs(averagePalletWeight, medianPalletWeight) {
    let _35Percent = 35 * 0.01;
    let _55Percent = 55 * 0.01;
    let _75Percent = 75 * 0.01;
    let _100Percent = 100 * 0.01;

    let weight_slab_0_35 = averagePalletWeight * _35Percent;
    let weight_slab_35_55 = (averagePalletWeight * _55Percent) - weight_slab_0_35;
    let weight_slab_55_75 = (averagePalletWeight * _75Percent) - weight_slab_0_35 - weight_slab_35_55;
    let weight_slab_75_100 = (averagePalletWeight * _100Percent) - weight_slab_0_35 - weight_slab_35_55 - weight_slab_55_75;
    let weight_slab_100_above = medianPalletWeight - averagePalletWeight;

    return {
        weight_slab_0_35,
        weight_slab_35_55,
        weight_slab_55_75,
        weight_slab_75_100,
        weight_slab_100_above,
    }
}

function getTotalPalletsToBeUsed(medianPalletWeight, vehicleMaxLoadCapacity) {
    let totalPallets = +vehicleMaxLoadCapacity / +medianPalletWeight;
    if(!isFinite(totalPallets)) return 0;
    return Math.ceil(totalPallets);
}

function getSlabRate(weight, averagePalletWeight, medianPalletWeight, weightCostPerKg) {
    let rate = 0;
    let _150Percent = 150 * 0.01;
    let _130Percent = 130 * 0.01;
    let _125Percent = 125 * 0.01;
    let _100Percent = 100 * 0.01;
    let _90Percent = 90 * 0.01;

    let {
        weight_slab_0_35,
        weight_slab_35_55,
        weight_slab_55_75,
        weight_slab_75_100,
        weight_slab_100_above,
    } = getWeightSlabs(averagePalletWeight, medianPalletWeight);

    rate += weight === 0 ? 0 : _150Percent * weight_slab_0_35 * weightCostPerKg;
    weight = weight - weight_slab_0_35 >= 0 ? weight - weight_slab_0_35 : 0;

    rate += weight === 0 ? 0 : _130Percent * weight_slab_35_55 * weightCostPerKg;
    weight = weight - weight_slab_35_55 >= 0 ? weight - weight_slab_35_55 : 0;

    rate += weight === 0 ? 0 : _125Percent * weight_slab_55_75 * weightCostPerKg;
    weight = weight - weight_slab_55_75 >= 0 ? weight - weight_slab_55_75 : 0;

    rate += weight === 0 ? 0 : _100Percent * weight_slab_75_100 * weightCostPerKg;
    weight = weight - weight_slab_75_100 >= 0 ? weight - weight_slab_75_100 : 0;

    rate += weight === 0 ? 0 : _90Percent * weight_slab_100_above * weightCostPerKg;

    return rate;
}

function getTotalRate(totalWeightBooked, medianPalletWeight, averagePalletWeight, weightCostPerKg,) {
    let remainingWeight = totalWeightBooked - medianPalletWeight;
    let weight = remainingWeight <= 0 ? totalWeightBooked : medianPalletWeight;
    if(remainingWeight <= 0) {
        return getSlabRate(weight, averagePalletWeight, medianPalletWeight, weightCostPerKg);
    }

    return getSlabRate(weight, averagePalletWeight, medianPalletWeight, weightCostPerKg)
        + getTotalRate(remainingWeight, medianPalletWeight, averagePalletWeight, weightCostPerKg);
}

export default function loadCalculation(
    vehicleMaxLoadCapacity,
    palletSpaceInVehicle,
    palletMaxLoadCapacity,
    totalCostOfVehicleLoadCapacity,
    totalWeightBooked,
){
    vehicleMaxLoadCapacity = +vehicleMaxLoadCapacity * 1000;
    palletMaxLoadCapacity = +palletMaxLoadCapacity * 1000;
    palletSpaceInVehicle = +palletSpaceInVehicle;
    totalCostOfVehicleLoadCapacity = +totalCostOfVehicleLoadCapacity;
    totalWeightBooked = +totalWeightBooked;

    let averagePalletWeight = getAveragePalletWeight(vehicleMaxLoadCapacity, palletSpaceInVehicle);
    let medianPalletWeight = getMedianAveragePalletWeight(averagePalletWeight, palletMaxLoadCapacity);
    let weightCostPerKg = getWeightCostPerKg(vehicleMaxLoadCapacity, totalCostOfVehicleLoadCapacity);
    let finalPrice = getTotalRate(totalWeightBooked, medianPalletWeight, averagePalletWeight, weightCostPerKg, 0);

    return {
        totalLoadCalculationCost: +finalPrice.toFixed(2),
    }
};