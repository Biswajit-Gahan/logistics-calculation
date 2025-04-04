import {useLogisticsContext} from "../../../../context/logistics-context.jsx";
import useLoadingScreen from "../../loading-screen/hooks/use-loading-screen.jsx";
import config from "../../../../utils/config.jsx";

export default function useUploadDataButton() {
    // {
    //     "vehicleSegment": "Heavy Duty",
    //     "vehicleType": "Truck",
    //     "vehicleMileage": "8.5",
    //     "lengthOfContainer": "12.0",
    //     "widthOfContainer": "2.5",
    //     "vehicleMaxLoadCapacity": "15000",
    //     "totalCostOfVehicleLoadCapacity": "50000",
    //     "palletWidth": "1.2",
    //     "palletHeight": "1.5",
    //     "palletSpaceInVehicle": "20",
    //     "palletPrice": "250",
    //     "palletMaxLoadCapacity": "1000",
    //     "pickupLocation": "New York",
    //     "dropLocation": "Los Angeles",
    //     "shipmentType": "Express",
    //     "totalWeightBooked": "12000",
    //     "travelDistance": "4500",
    //     "travelTime": "72",
    //     "fuelCost": "1200",
    //     "shipmentTypeCost": "5000",
    //     "totalDistanceCost": "8000",
    //     "totalLoadCalculationCost": "15000"
    // }
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
                totalDistanceCost,
                totalLoadCost,
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
                totalDistanceCost,
                totalLoadCalculationCost: totalLoadCost
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

        const responseData = await response.json();
        console.log(responseData);
        hideLoadingScreen();
    }

    return {handleSubmit}
}