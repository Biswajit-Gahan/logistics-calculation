import TextInput from "../../../../ui/text-input.jsx";
import {useLogisticsContext} from "../../../../../context/logistics-context.jsx";

function useDriverCostInput() {
    let {
        state: {costDetails: {driverCost}},
        dispatch
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_DRIVER_COST",
            payload: value,
        })
    }

    return {driverCost, onInputHandler}
}

export default function DriverCostInput() {
    const {driverCost, onInputHandler} = useDriverCostInput();

    return <TextInput placeholder={"Driver Cost / KM"} value={driverCost ? driverCost : ""} onChange={onInputHandler} />
}