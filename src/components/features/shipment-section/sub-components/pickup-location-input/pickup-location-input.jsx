import usePickupLocationInput from "./hooks/use-pickup-location-input.jsx";

export default function PickupLocationInput() {
    let {
        pickupLocation,
        onInputHandler
    } = usePickupLocationInput();

    return <input className={"input-default-style"} placeholder={"Pickup location"} value={pickupLocation} onChange={onInputHandler} />
}