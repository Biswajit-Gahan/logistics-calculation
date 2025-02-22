import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useShipmentTypeCostInput() {
    let {
        state: {costDetails: {shipmentTypeCost}, shipmentDetails: {shipmentType}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return;

        dispatch({
            type: "SET_SHIPMENT_TYPE_COST",
            payload: value,
        })
    }

    shipmentType = shipmentType.replace(shipmentType.charAt(0), shipmentType.charAt(0).toUpperCase())

    return {shipmentType, shipmentTypeCost, onInputHandler}
}