import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";

export default function usePalletPriceInput() {
    let {
        state: {vehicleDetails: {vehicleType, palletPrice}},
        dispatch,
    } = useLogisticsContext();



    function onInputHandler(event) {
        let value = event.target.value;

        if(value !== "" && isNaN(value)) return

        dispatch({
            type: "SET_PALLET_PRICE",
            payload: value,
        })
    }

    return {vehicleType, palletPrice, onInputHandler}
}