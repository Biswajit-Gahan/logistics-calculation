import useShipmentTypeOption from "./hooks/use-shipment-type-option.jsx";

export default function ShipmentTypeOption() {
    let {
        shipmentType,
        onChangeHandler
    } = useShipmentTypeOption();

    return <div className={"select-wrapper-default-style"}>
        <select className={"w-full outline-0"} value={shipmentType || ""} onChange={onChangeHandler}>
            <option value={""} disabled={true}>Shipment type</option>
            <option value={"ambient"}>Ambient</option>
            <option value={"frozen"}>Frozen</option>
            <option value={"chilled"}>Chilled</option>
        </select>
    </div>
}