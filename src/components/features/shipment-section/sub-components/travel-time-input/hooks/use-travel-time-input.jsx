import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useTravelTimeInput() {
    let {
        state: {shipmentDetails: {travelTime}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_TRAVEL_TIME",
            payload: value
        })
    }

    return {travelTime, onInputHandler}
}