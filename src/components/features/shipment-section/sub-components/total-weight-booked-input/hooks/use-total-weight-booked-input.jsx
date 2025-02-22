import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useTotalWeightBookedInput() {
    let {
        state: {shipmentDetails: {totalWeightBooked}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_TOTAL_WEIGHT_BOOKED",
            payload: value
        })
    }

    return {totalWeightBooked, onInputHandler}
}