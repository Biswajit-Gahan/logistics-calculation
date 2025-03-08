import usePalletPriceInput from "./hooks/use-pallet-price-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function PalletPriceInput() {
    let {
        vehicleType,
        palletPrice,
        onInputHandler
    } = usePalletPriceInput();

    if(!vehicleType) return null;

    // return <input className={"input-default-style"} placeholder={"Pallet price"} value={palletPrice || ""} onChange={onInputHandler} />
    return <TextInput placeholder={"Pallet price"} value={palletPrice || ""} onChange={onInputHandler} />
}