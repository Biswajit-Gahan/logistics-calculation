import useCostDescription from "./hooks/use-cost-description/use-cost-description.jsx";

export default function CostDescription() {
    let {
        fuelCost,
        shipmentTypeCost,
        shipmentType
    } = useCostDescription();

    return <div className={"[&>*]:break-words"}>
        <p>&gt; Fuel cost = {fuelCost} Rupees / KM</p>
        <p>&gt; {shipmentType ? `${shipmentType} shipment` : "Shipment type"} cost = {shipmentTypeCost} Rupees</p>
    </div>
}