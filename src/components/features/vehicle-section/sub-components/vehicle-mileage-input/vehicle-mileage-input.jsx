import useVehicleMileageInput from "./hooks/use-vehicle-mileage-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function VehicleMileageInput() {
    let {
        vehicleType,
        vehicleMileage,
        onInputHandler
    } = useVehicleMileageInput();

    if(!vehicleType) return null;

    // return <input className={"input-default-style"} placeholder={"Vehicle mileage / km"} value={vehicleMileage || ""} onChange={onInputHandler} />
    return <TextInput placeholder={"Vehicle mileage / km"} value={vehicleMileage || ""} onChange={onInputHandler} />
}