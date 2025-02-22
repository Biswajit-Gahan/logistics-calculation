import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function usePickupLocationInput() {
    let {
        state: {shipmentDetails: {pickupLocation}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        dispatch({
            type: "SET_PICKUP_LOCATION",
            payload: event.target.value
        })
    }

    return {pickupLocation, onInputHandler}
}