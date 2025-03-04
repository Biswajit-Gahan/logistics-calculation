import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useLoadCapacityCostInput() {
    const {
        state: {vehicleDetails: {vehicleType, totalCostOfVehicleLoadCapacity}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_TOTAL_COST_OF_VEHICLE_LOAD_CAPACITY",
            payload: value,
        })
    };

    return  {vehicleType, totalCostOfVehicleLoadCapacity, onInputHandler};
}