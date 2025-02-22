import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import distanceCalculation from "../../../../../../utils/distance-calculation.js";

export default function useDistanceCostCalculation() {
    let {
        state: {
            shipmentDetails: {pickupLocation, dropLocation, travelDistance, travelTime},
            vehicleDetails: {vehicleMileage},
            costDetails: {fuelCost}
        }
    } = useLogisticsContext();

    const {perKmCost, totalCost} = distanceCalculation(fuelCost, vehicleMileage, travelDistance);

    return {
        pickupLocation,
        dropLocation,
        travelDistance,
        travelTime,
        vehicleMileage,
        fuelCost,
        perKmCost,
        totalCost,
    }
}
