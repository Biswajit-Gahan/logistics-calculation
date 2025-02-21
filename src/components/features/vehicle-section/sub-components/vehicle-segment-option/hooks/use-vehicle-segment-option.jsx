import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import {vehicleData} from "../../../../../../data/data.js";
import {useMemo} from "react";

export default function useVehicleSegmentOption() {
    let {
        state: {vehicleDetails: {vehicleSegment}},
        dispatch,
    } = useLogisticsContext();

    function onSelectHandler(event) {
        dispatch({
            type: "SET_VEHICLE_SEGMENT",
            payload: event.target.value,
        })
    }

    let allVehicleSegments = useMemo(() => {
        let segments = [];
        vehicleData.forEach(vehicle => {
            if(!segments.includes(vehicle.vehicleSegment)) {
                segments.push(vehicle.vehicleSegment)
            }
        })
        return segments;
    }, [vehicleSegment])

    return {vehicleSegment, onSelectHandler, allVehicleSegments}
}