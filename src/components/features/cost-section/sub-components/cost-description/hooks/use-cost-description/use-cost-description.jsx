import {useLogisticsContext} from "../../../../../../../context/logistics-context.jsx";

export default function useCostDescription() {
    let {
        state: { costDetails: {fuelCost, shipmentTypeCost}, shipmentDetails: {shipmentType} },
    } = useLogisticsContext();

    shipmentType = shipmentType.replace(shipmentType.charAt(0), shipmentType.charAt(0).toUpperCase())

    return {fuelCost, shipmentTypeCost, shipmentType}
}