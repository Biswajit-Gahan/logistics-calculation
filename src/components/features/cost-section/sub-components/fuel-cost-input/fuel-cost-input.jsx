import useFuelCostInput from "./hooks/use-fuel-cost-input.jsx";

export default function FuelCostInput() {
    let {
        fuelCost,
        onInputHandler
    } = useFuelCostInput();

    return <input className={"input-default-style"} placeholder={"Fuel cost / KM"} value={fuelCost || ""} onChange={onInputHandler} />
}