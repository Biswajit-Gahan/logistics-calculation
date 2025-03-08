import usePickupLocationInput from "./hooks/use-pickup-location-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function PickupLocationInput() {
    let {
        pickupLocation,
        onInputHandler
    } = usePickupLocationInput();

    // return <input className={"input-default-style"} placeholder={"Pickup location"} value={pickupLocation} onChange={onInputHandler} />
    return <TextInput placeholder={"Pickup location"} value={pickupLocation} onChange={onInputHandler} />
}