import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useVehicleMileageInput() {
    let {
        state: {vehicleDetails: {vehicleType, vehicleMileage}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return

        dispatch({
            type: "SET_VEHICLE_MILEAGE",
            payload: value,
        })
    }

    return {vehicleType, vehicleMileage, onInputHandler}
}