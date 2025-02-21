import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useVehicleMileageInput() {
    let {
        state: {vehicleDetails: {vehicleType, vehicleMileage}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        dispatch({
            type: "SET_VEHICLE_MILEAGE",
            payload: event.target.value,
        })
    }

    return {vehicleType, vehicleMileage, onInputHandler}
}