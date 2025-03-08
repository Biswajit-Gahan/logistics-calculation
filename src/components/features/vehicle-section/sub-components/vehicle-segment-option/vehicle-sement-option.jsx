import useVehicleSegmentOption from "./hooks/use-vehicle-segment-option.jsx";
import SelectInput from "../../../../ui/select-input.jsx";

export default function VehicleSegmentOption() {
    let {vehicleSegment, onSelectHandler, allVehicleSegments} = useVehicleSegmentOption();

    // return <div className={"select-wrapper-default-style"}>
    //     <select className={"w-full outline-0"} onChange={onSelectHandler} value={vehicleSegment}>
    //         <option value={""} disabled={true}>Vehicle segment</option>
    //         {
    //             allVehicleSegments.map((segment, index) => (
    //                 <option value={segment} key={index}>{segment}</option>
    //             ))
    //         }
    //     </select>
    // </div>

    return <SelectInput placeholder={"Vehicle segment"} onChange={onSelectHandler} value={vehicleSegment}>
        <option value={""} disabled={true}>Select</option>
        {
            allVehicleSegments.map((segment, index) => (
                <option value={segment} key={index}>{segment}</option>
            ))
        }
    </SelectInput>
}