import useLoadCapacityCostInput from "./hooks/use-load-capacity-cost-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function LoadCapacityCostInput() {
    const {
        vehicleType,
        totalCostOfVehicleLoadCapacity,
        onInputHandler
    } = useLoadCapacityCostInput();

    if(!vehicleType) return null;

    // return <input className={"input-default-style"} placeholder={"Vehicle load capacity cost"} value={totalCostOfVehicleLoadCapacity || ""} onChange={onInputHandler} />
    return <TextInput placeholder={"Vehicle load capacity cost"} value={totalCostOfVehicleLoadCapacity || ""} onChange={onInputHandler} />
}