import useTravelTimeInput from "./hooks/use-travel-time-input.jsx";

export default function TravelTimeInput() {
    let {
        travelTime,
        onInputHandler
    } = useTravelTimeInput()

    return <input className={"input-default-style"} placeholder={"Travel Time (Hour)"} value={travelTime || ""} onChange={onInputHandler} />
}