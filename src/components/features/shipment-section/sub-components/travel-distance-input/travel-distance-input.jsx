import useTravelDistanceInput from "./hooks/use-travel-distance-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function TravelDistanceInput() {
    let {
        travelDistance,
        onInputHandler
    } = useTravelDistanceInput();

    // return <input className={"input-default-style"} placeholder={"Travel Distance (KM)"} value={travelDistance || ""} onChange={onInputHandler} />
    return <TextInput placeholder={"Travel Distance (KM)"} value={travelDistance || ""} onChange={onInputHandler} />
}