import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useTravelDistanceInput() {
    let {
        state: {shipmentDetails: {travelDistance}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_TRAVEL_DISTANCE",
            payload: value
        })
    }

    return {travelDistance, onInputHandler}
}