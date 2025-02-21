import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function usePalletPriceInput() {
    let {
        state: {vehicleDetails: {vehicleType, palletPrice}},
        dispatch,
    } = useLogisticsContext();

    function onInputHandler(event) {
        dispatch({
            type: "SET_PALLET_PRICE",
            payload: event.target.value,
        })
    }

    return {vehicleType, palletPrice, onInputHandler}
}