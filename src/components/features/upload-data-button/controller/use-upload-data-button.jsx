import {useLogisticsContext} from "../../../../context/logistics-context.jsx";
import useLoadingScreen from "../../loading-screen/hooks/use-loading-screen.jsx";
import config from "../../../../utils/config.jsx";

export default function useUploadDataButton() {
    const {
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
                totalTimeCost
            }
        },
    } = useLogisticsContext();

    const {showLoadingScreen, hideLoadingScreen} = useLoadingScreen();

    async function handleSubmit() {
        showLoadingScreen();

        const bodyData = {
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
                driverCost,
                totalDistanceCost,
                totalLoadCalculationCost: totalLoadCost,
                totalTimeCost,
        }

        const response = await fetch(
            `${config.api.baseUrl}${config.api.saveCalculationHistoryEndpoint}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bodyData)
            }
        );

        await response.json();
        hideLoadingScreen();
    }

    return {handleSubmit}
}