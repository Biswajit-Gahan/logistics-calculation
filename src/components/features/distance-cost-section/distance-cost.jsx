import DistanceRequiredFields from "./sub-components/distance-required-fields/distance-required-fields.jsx";
import DistanceCostCalculation from "./sub-components/distance-cost-calculation/distance-cost-calculation.jsx";

export default function DistanceCost() {
    return <div>
        <div>
            <p>Distance Cost</p>
        </div>

        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div>
                <DistanceRequiredFields />
            </div>
            <div>
                <DistanceCostCalculation />
            </div>
        </div>
    </div>
}