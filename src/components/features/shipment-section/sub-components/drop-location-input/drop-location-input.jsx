import useDropLocationInput from "./hooks/use-drop-location-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function DropLocationInput() {
    let {
        pickupLocation,
        onInputHandler
    } = useDropLocationInput();

    // return <input className={"input-default-style"} placeholder={"Drop location"} value={pickupLocation} onChange={onInputHandler} />;
    return <TextInput placeholder={"Drop location"} value={pickupLocation} onChange={onInputHandler} />
}