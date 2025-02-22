import useVehicleDescription from "./hooks/use-vehicle-description.jsx";

export default function VehicleDescription() {
    let {
        vehicleSegment,
        vehicleType,
        vehicleMileage,
        lengthOfContainer,
        widthOfContainer,
        vehicleMaxLoadCapacity,
        palletWidth,
        palletHeight,
        palletSpaceInVehicle,
        palletPrice,
        palletMaxLoadCapacity,
    } = useVehicleDescription();

    return <div className={"[&>*]:break-words"}>
        <p>&gt; Vehicle segment = {vehicleSegment || "No Data"}</p>
        <p>&gt; Vehicle type = {vehicleType || "No Data"}</p>
        <p>&gt; Vehicle mileage = {vehicleMileage} Rupees / KM</p>
        <p>&gt; Length of container = {lengthOfContainer} Feet</p>
        <p>&gt; Width of container = {widthOfContainer} Feet</p>
        <p>&gt; Max load capacity (Vehicle) = {vehicleMaxLoadCapacity} Ton</p>
        <p>&gt; Pallet size = {palletWidth} * {palletHeight} Feet</p>
        <p>&gt; Pallet space in vehicle = {palletSpaceInVehicle} Nos.</p>
        <p>&gt; Max load capacity (Pallet) = {palletMaxLoadCapacity} Ton</p>
        <p>&gt; Pallet Price = {palletPrice} Rupees / Unit</p>
    </div>
}