import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import {vehicleData} from "../../../../../../data/data.js";
import {useMemo} from "react";

export default function useVehicleTypeOption() {
    let {
        state: {vehicleDetails: {vehicleSegment, vehicleType}},
        dispatch,
    } = useLogisticsContext();

    function onSelectHandler(event) {
        dispatch({
            type: "SET_VEHICLE_TYPE",
            payload: event.target.value,
        })
    }

    let allVehicleTypes = useMemo(() => {
        return vehicleData
            .filter(vehicle => vehicle.vehicleSegment === vehicleSegment)
            .map(vehicle => vehicle.vehicleType)
    }, [vehicleSegment])

    return {vehicleSegment, vehicleType, onSelectHandler, allVehicleTypes}
}