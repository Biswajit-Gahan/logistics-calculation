import {useLogisticsContext} from "../../../../context/logistics-context.jsx";
import distanceCalculation from "../../../../utils/distance-calculation.js";
import {useMemo} from "react";
import loadCalculation from "../../../../utils/load-calculation.js";

export default function useAllDetails() {
    let {
        state: {
            vehicleDetails: {
                vehicleSegment,
                vehicleType,
                vehicleMileage,
                lengthOfContainer,
                widthOfContainer,
                vehicleMaxLoadCapacity,
                totalCostOfVehicleLoadCapacity,
                palletWidth,
                palletHeight,
                palletSpaceInVehicle,
                palletPrice,
                palletMaxLoadCapacity,
            },
            shipmentDetails: {
                pickupLocation,
                dropLocation,
                shipmentType,
                totalWeightBooked,
                travelDistance,
                travelTime,
            },
            costDetails: {
                fuelCost,
                shipmentTypeCost,
                totalDistanceCost,
                totalLoadCost,
            }
        },
        dispatch,
    } = useLogisticsContext();

    const {totalDistanceCost: distanceCost} = useMemo(
        () => distanceCalculation(fuelCost, vehicleMileage, travelDistance),
        [fuelCost, vehicleMileage, travelDistance]
    );

    const {totalLoadCalculationCost} = useMemo(
        () => loadCalculation(vehicleMaxLoadCapacity, palletSpaceInVehicle, palletMaxLoadCapacity, totalCostOfVehicleLoadCapacity, totalWeightBooked),
        [vehicleMaxLoadCapacity, palletSpaceInVehicle, palletMaxLoadCapacity, totalCostOfVehicleLoadCapacity, totalWeightBooked]
    )

    if(distanceCost !== totalDistanceCost || totalLoadCalculationCost !== totalLoadCost) {
        dispatch({
            type: "SET_DISTANCE_AND_LOAD_COST",
            payload: {
                totalDistanceCost: distanceCost,
                totalLoadCost: totalLoadCalculationCost,
            }
        })
    }

    return {
        vehicleSegment,
        vehicleType,
        vehicleMileage,
        lengthOfContainer,
        widthOfContainer,
        vehicleMaxLoadCapacity,
        totalCostOfVehicleLoadCapacity,
        palletWidth,
        palletHeight,
        palletSpaceInVehicle,
        palletPrice,
        palletMaxLoadCapacity,
        pickupLocation,
        dropLocation,
        shipmentType,
        totalWeightBooked,
        travelDistance,
        travelTime,
        fuelCost,
        shipmentTypeCost,
        totalDistanceCost,
        totalLoadCalculationCost,
    }
}