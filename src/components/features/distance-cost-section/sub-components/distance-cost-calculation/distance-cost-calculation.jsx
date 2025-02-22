import useDistanceCostCalculation from "./hooks/use-distance-cost-calculation.jsx";

export default function DistanceCostCalculation() {
    let {
        pickupLocation,
        dropLocation,
        travelDistance,
        travelTime,
        vehicleMileage,
        fuelCost,
        perKmCost,
        totalCost,
    } = useDistanceCostCalculation();

    if(!pickupLocation || !dropLocation) return null

    return <div>
        <div>
            <p>&gt; Pickup location = {pickupLocation}</p>
            <p>&gt; Drop location = {dropLocation}</p>
            <p>&gt; Travel distance = {travelDistance} KM</p>
            <p>&gt; Travel time = {travelTime} Hour</p>
            <p>&gt; Vehicle mileage = {vehicleMileage} KM / Liter</p>
            <p>&gt; Fuel cost = {fuelCost} Rupees / Liter</p>
        </div>

        <div className={"mt-5"}>
            <p>&gt; Distance Cost Calculation: </p>

            <div className={"mt-5"}>
                <p className={"text-gray-300"}>&gt; Per KM Cost = Fuel Cost Per Liter / Vehicle Mileage Per Liter</p>
                <p className={"text-gray-400"}>&gt; Per KM Cost = {fuelCost} / {vehicleMileage}</p>
                <p className={"text-gray-700"}>&gt; Per KM Cost = {perKmCost} Rupees</p>
            </div>

            <div className={"mt-5"}>
                <p className={"text-gray-300"}>&gt; Total Cost = Total Distance * Per KM Cost</p>
                <p className={"text-gray-400"}>&gt; Total Cost = {travelDistance} * {perKmCost}</p>
                <p className={"text-gray-700"}>&gt; Total Cost = {totalCost} Rupees</p>
            </div>
        </div>
    </div>
}

