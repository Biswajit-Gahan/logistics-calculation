import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import {vehicleData} from "../../../../../../data/data.js";
import {useMemo} from "react";

export default function useVehicleTypeOption() {
    let {
        state: {vehicleDetails: {vehicleSegment, vehicleType}, allVehicleSegments},
        dispatch,
    } = useLogisticsContext();

    function getVehicleDetails (vehicleName) {
        let details = allVehicleSegments.find(vehicle => vehicle.vehicleType === vehicleName);

        if(!details) return {
            lengthOfContainer: 0,
            widthOfContainer: 0,
            vehicleMaxLoadCapacity:  0,
            palletWidth: 0,
            palletHeight: 0,
            palletSpaceInVehicle: 0,
            palletMaxLoadCapacity:  0,
        }

        return {
            lengthOfContainer: details.lengthOfContainer,
            widthOfContainer: details.widthOfContainer,
            vehicleMaxLoadCapacity:  details.maxLoadCapacity,
            palletWidth: details.palletSizeWidth,
            palletHeight: details.palletSizeHeight,
            palletSpaceInVehicle: details.palletSpaceInVehicle,
            palletMaxLoadCapacity:  details.palletMaxLoadCapacity,
        }
    }

    function onSelectHandler(event) {
        console.log("called");
        dispatch({
            type: "SET_VEHICLE_TYPE",
            payload: {
                vehicleType: event.target.value,
                ...getVehicleDetails(event.target.value),
            },
        })
    }

    let allVehicleTypes = useMemo(() => {
        return allVehicleSegments
            .filter(vehicle => vehicle.vehicleSegment === vehicleSegment)
            .map(vehicle => vehicle.vehicleType)
    }, [vehicleSegment])

    return {vehicleSegment, vehicleType, onSelectHandler, allVehicleTypes}
}