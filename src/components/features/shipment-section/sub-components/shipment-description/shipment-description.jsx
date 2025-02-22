import useShipmentDescription from "./hooks/use-shipment-description.jsx";

export default function ShipmentDescription() {
    let {
        dropLocation,
        pickupLocation,
        shipmentType,
        totalWeightBooked,
        travelDistance,
        travelTime
    } = useShipmentDescription();

    return <div className={"[&>*]:break-words [&>*]:capitalize"}>
        <p>&gt; Pickup location = {pickupLocation || "No Data"}</p>
        <p>&gt; Drop location = {dropLocation || "No Data"}</p>
        <p>&gt; Shipment type = {shipmentType || "No Data"}</p>
        <p>&gt; Total weight booked - {totalWeightBooked} KG</p>
        <p>&gt; Travel Distance - {travelDistance} KM</p>
        <p>&gt; Travel Time - {travelTime} Hour</p>
    </div>
}