import useAllDetails from "./hooks/use-all-details.jsx";

export default function AllDetailsSection() {
    let {
        vehicleSegment,
        vehicleType,
        vehicleMileage,
        lengthOfContainer,
        widthOfContainer,
        vehicleMaxLoadCapacity,
        totalCostOfVehicleLoadCapacity,
        palletWidth,
        palletHeight,
        palletSpaceInVehicle,
        palletPrice,
        palletMaxLoadCapacity,
        pickupLocation,
        dropLocation,
        shipmentType,
        totalWeightBooked,
        travelDistance,
        travelTime,
        fuelCost,
        shipmentTypeCost,
        driverCost,
        totalDistanceCost,
        totalLoadCost,
        totalTimeCost,
    } = useAllDetails();

    return <div>
        <div>
            <p>All Details</p>
        </div>

        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"[&>*]:break-words"}>
                <p>&gt; Vehicle segment = {vehicleSegment || "No Data"}</p>
                <p>&gt; Vehicle type = {vehicleType || "No Data"}</p>
                <p>&gt; Vehicle mileage = {vehicleMileage} KM / Liter</p>
                <p>&gt; Length of container = {lengthOfContainer} Feet</p>
                <p>&gt; Width of container = {widthOfContainer} Feet</p>
                <p>&gt; Max load capacity (Vehicle) = {vehicleMaxLoadCapacity} Ton</p>
                <p>&gt; Total load capacity cost (Vehicle) = {totalCostOfVehicleLoadCapacity} Rupees</p>
                <p>&gt; Pallet size = {palletWidth} * {palletHeight} Feet</p>
                <p>&gt; Pallet space in vehicle = {palletSpaceInVehicle} Nos.</p>
                <p>&gt; Max load capacity (Pallet) = {palletMaxLoadCapacity} Ton</p>
                <p>&gt; Pallet Price = {palletPrice} Rupees / Unit</p>
                <p>&gt; Pickup location = {pickupLocation || "No Data"}</p>
                <p>&gt; Drop location = {dropLocation || "No Data"}</p>
                <p>&gt; Shipment type = {shipmentType || "No Data"}</p>
                <p>&gt; Total weight booked - {totalWeightBooked} KG</p>
                <p>&gt; Travel Distance - {travelDistance} KM</p>
                <p>&gt; Travel Time - {travelTime} Hour</p>
                <p>&gt; Fuel cost = {fuelCost} Rupees / Liter</p>
                <p>&gt; {shipmentType ? `${shipmentType} shipment` : "Shipment type"} cost = {shipmentTypeCost} Rupees</p>
                <p>&gt; Driver Cost = {driverCost} Rupees / Liter</p>
                <br/>
                <hr className={"text-neutral-200"}/>
                <br/>
                <p>&gt; Total distance Cost = {totalDistanceCost} Rupees</p>
                <p>&gt; Total Load Cost = {totalLoadCost} Rupees</p>
                <p>&gt; Total Time Cost = {totalTimeCost} Rupees</p>
                <p>&gt; Total Cost = {totalDistanceCost + totalLoadCost + totalTimeCost} Rupees</p>
            </div>
        </div>
    </div>
}