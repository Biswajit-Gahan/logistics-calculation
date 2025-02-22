import FuelCostInput from "./sub-components/fuel-cost-input/fuel-cost-input.jsx";
import CostDescription from "./sub-components/cost-description/cost-description.jsx";
import ShipmentTypeCostInput from "./sub-components/shipment-type-cost-input/shipment-type-cost-input.jsx";

export default function CostDetails() {
    return <div>
        <div>
            <p>Cost Details</p>
        </div>

        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"}>
                <FuelCostInput />
                <ShipmentTypeCostInput />
            </div>

            <div className={"mt-5"}>
                <CostDescription />
            </div>
        </div>
    </div>
}