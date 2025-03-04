import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import {vehicleData} from "../../../../../../data/data.js";
import {useMemo} from "react";

export default function useVehicleDescription() {
    let {
        state: {
            vehicleDetails: {
                vehicleSegment = "",
                vehicleType = "",
                vehicleMileage = 0,
                palletPrice = 0,
                totalCostOfVehicleLoadCapacity = 0,
            }
        }
    } = useLogisticsContext();

    let getVehicleDescription = useMemo(() => {
        let data = vehicleData.find(vehicle => vehicle.vehicleType === vehicleType)

        if(!data) return {
            lengthOfContainer: 0,
            widthOfContainer: 0,
            vehicleMaxLoadCapacity:  0,
            palletWidth: 0,
            palletHeight: 0,
            palletSpaceInVehicle: 0,
            palletMaxLoadCapacity:  0,
        }

        return {
            lengthOfContainer: data.lengthOfContainer,
            widthOfContainer: data.widthOfContainer,
            vehicleMaxLoadCapacity:  data.maxLoadCapacity,
            palletWidth: data.palletSizeWidth,
            palletHeight: data.palletSizeHeight,
            palletSpaceInVehicle: data.palletSpaceInVehicle,
            palletMaxLoadCapacity:  data.palletMaxLoadCapacity,
        }
    }, [vehicleType])

    return {
        ...(getVehicleDescription),
        vehicleSegment,
        vehicleType,
        vehicleMileage,
        palletPrice,
        totalCostOfVehicleLoadCapacity
    }
}