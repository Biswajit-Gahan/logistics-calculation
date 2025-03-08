import useShipmentTypeCostInput from "./hooks/use-shipment-type-cost-input.jsx";
import TextInput from "../../../../ui/text-input.jsx";

export default function ShipmentTypeCostInput() {
    let {
        shipmentType,
        shipmentTypeCost,
        onInputHandler
    } = useShipmentTypeCostInput();

    // return <input className={"input-default-style"} placeholder={`${shipmentType ? `${shipmentType} shipment` : "Shipment type"} cost`} value={shipmentTypeCost || ""} onChange={onInputHandler} />
    return <TextInput placeholder={`${shipmentType ? `${shipmentType} shipment` : "Shipment type"} cost`} value={shipmentTypeCost || ""} onChange={onInputHandler} />
}