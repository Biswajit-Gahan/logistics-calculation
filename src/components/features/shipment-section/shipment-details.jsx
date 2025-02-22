import PickupLocationInput from "./sub-components/pickup-location-input/pickup-location-input.jsx";
import DropLocationInput from "./sub-components/drop-location-input/drop-location-input.jsx";
import ShipmentTypeOption from "./sub-components/shipment-type-option/shipment-type-option.jsx";
import TotalWeightBookedInput from "./sub-components/total-weight-booked-input/total-weight-booked-input.jsx";
import TravelDistanceInput from "./sub-components/travel-distance-input/travel-distance-input.jsx";
import TravelTimeInput from "./sub-components/travel-time-input/travel-time-input.jsx";
import ShipmentDescription from "./sub-components/shipment-description/shipment-description.jsx";

export default function ShipmentDetails() {
    return <div>
        <div>
            <p>Shipment Details</p>
        </div>
        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"}>
                <PickupLocationInput />
                <DropLocationInput />
                <ShipmentTypeOption />
                <TotalWeightBookedInput />
                <TravelDistanceInput />
                <TravelTimeInput />
            </div>

            <div className={"mt-5"}>
                <ShipmentDescription />
            </div>
        </div>
    </div>
}