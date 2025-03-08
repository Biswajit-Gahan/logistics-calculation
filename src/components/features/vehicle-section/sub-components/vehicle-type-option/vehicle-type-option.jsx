import useVehicleTypeOption from "./hooks/use-vehicle-type-option.jsx";
import SelectInput from "../../../../ui/select-input.jsx";

export default function VehicleTypeOption() {
    let {
        vehicleSegment,
        vehicleType,
        allVehicleTypes,
        onSelectHandler,
    } = useVehicleTypeOption();

    if(!vehicleSegment) return null;

    // return <div className={"select-wrapper-default-style"}>
    //     <select className={"w-full outline-0"} onChange={onSelectHandler} value={vehicleType}>
    //         <option value={""} disabled={true}>Vehicle type</option>
    //         {
    //             allVehicleTypes.map((vehicleType, index) => (
    //                 <option value={vehicleType} key={index}>{vehicleType}</option>
    //             ))
    //         }
    //     </select>
    // </div>

    return <SelectInput placeholder={"Vehicle type"} onChange={onSelectHandler} value={vehicleType}>
        <option value={""} disabled={true}>Select</option>
        {
            allVehicleTypes.map((vehicleType, index) => (
                <option value={vehicleType} key={index}>{vehicleType}</option>
            ))
        }
    </SelectInput>
}