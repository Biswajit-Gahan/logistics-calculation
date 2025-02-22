import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useFuelCostInput() {
    let {
        state: {costDetails: {fuelCost}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_FUEL_COST",
            payload: value,
        })
    }

    return {fuelCost, onInputHandler}
}