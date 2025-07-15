import {useLogisticsContext} from "../../../../context/logistics-context.jsx";
import distanceCalculation from "../../../../utils/distance-calculation.js";
import {useEffect, useMemo} from "react";
import loadCalculation from "../../../../utils/load-calculation.js";
import timeCalculation from "../../../../utils/time-calculation.js";

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
                driverCost,
                totalDistanceCost,
                totalLoadCost,
                totalTimeCost,
            }
        },
        dispatch,
    } = useLogisticsContext();

    const {totalDistanceValue} = useMemo(
        () => distanceCalculation(fuelCost, vehicleMileage, travelDistance),
        [fuelCost, vehicleMileage, travelDistance]
    );
    //
    const {totalLoadCalculationCost} = useMemo(
        () => loadCalculation(vehicleMaxLoadCapacity, palletSpaceInVehicle, palletMaxLoadCapacity, totalCostOfVehicleLoadCapacity, totalWeightBooked),
        [vehicleMaxLoadCapacity, palletSpaceInVehicle, palletMaxLoadCapacity, totalCostOfVehicleLoadCapacity, totalWeightBooked]
    )

    const {totalTimeCalculationCost} = useMemo(() => timeCalculation(shipmentTypeCost, driverCost, travelDistance), [shipmentTypeCost, driverCost, travelDistance])
    //
    // if(distanceCost !== totalDistanceCost || totalLoadCalculationCost !== totalLoadCost) {
    //     dispatch({
    //         type: "SET_DISTANCE_AND_LOAD_COST",
    //         payload: {
    //             totalDistanceCost: distanceCost,
    //             totalLoadCost: totalLoadCalculationCost,
    //         }
    //     })
    // }

    useEffect(() => {
        dispatch({
            type: "SET_DISTANCE_AND_LOAD_COST",
            payload: {
                totalDistanceCost: totalDistanceValue,
                totalLoadCost: totalLoadCalculationCost,
                totalTimeCost: totalTimeCalculationCost,
            }
        })
    }, [
        fuelCost,
        vehicleMileage,
        travelDistance,
        totalDistanceValue,
        vehicleMaxLoadCapacity,
        palletSpaceInVehicle,
        palletMaxLoadCapacity,
        totalCostOfVehicleLoadCapacity,
        totalWeightBooked,
        totalLoadCalculationCost
    ]);

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
        totalLoadCost,
        totalTimeCost,
    }
}