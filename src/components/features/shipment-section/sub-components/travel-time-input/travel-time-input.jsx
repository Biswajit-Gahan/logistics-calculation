import useTravelTimeInput from "./hooks/use-travel-time-input.jsx";

export default function TravelTimeInput() {
    let {
        travelTime,
        onInputHandler
    } = useTravelTimeInput()

    return <input className={"input-default-style"} placeholder={"Travel Time (Hr)"} value={travelTime || ""} onChange={onInputHandler} />
}