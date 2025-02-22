import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useDistanceRequiredFields() {
    let {
        state: { shipmentDetails: {pickupLocation, dropLocation}}
    } = useLogisticsContext();

    return {pickupLocation, dropLocation};
}