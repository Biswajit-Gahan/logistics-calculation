import useTotalWeightBookedInput from "./hooks/use-total-weight-booked-input.jsx";

export default function TotalWeightBookedInput() {
    let {
        totalWeightBooked,
        onInputHandler
    } = useTotalWeightBookedInput();

    return <input className={"input-default-style"} placeholder={"Total weight booked (KG)"} value={totalWeightBooked || ""} onInput={onInputHandler} />
}