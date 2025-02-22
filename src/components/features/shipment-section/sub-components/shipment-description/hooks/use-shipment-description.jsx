import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useShipmentDescription() {
    let {
        state: {shipmentDetails: {
            pickupLocation,
            dropLocation,
            shipmentType,
            totalWeightBooked,
            travelDistance,
            travelTime,
        }},
    } = useLogisticsContext();

    return {
        pickupLocation,
        dropLocation,
        shipmentType,
        totalWeightBooked,
        travelDistance,
        travelTime,
    }
}