import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useDropLocationInput() {
    let {
        state: {shipmentDetails: {dropLocation}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        dispatch({
            type: "SET_DROP_LOCATION",
            payload: event.target.value
        })
    }

    return {dropLocation, onInputHandler}
}