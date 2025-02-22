import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function useShipmentTypeOption() {
    let {
        state: {shipmentDetails: {shipmentType}},
        dispatch,
    } = useLogisticsContext();

    function onChangeHandler(event) {
        dispatch({
            type: "SET_SHIPMENT_TYPE",
            payload: event.target.value
        })
    }

    return {shipmentType, onChangeHandler}
}