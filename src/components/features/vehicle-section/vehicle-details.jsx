import VehicleSegmentOption from "./sub-components/vehicle-segment-option/vehicle-sement-option.jsx";
import VehicleTypeOption from "./sub-components/vehicle-type-option/vehicle-type-option.jsx";
import VehicleMileageInput from "./sub-components/vehicle-mileage-input/vehicle-mileage-input.jsx";
import PalletPriceInput from "./sub-components/pallet-price-input/pallet-price-input.jsx";
import VehicleDescription from "./sub-components/vehicle-description/vehicle-description.jsx";

export default function VehicleDetails() {
    return <div>
        <div>
            <p>Vehicle Details</p>
        </div>
        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"}>
                <VehicleSegmentOption />
                <VehicleTypeOption />
                <VehicleMileageInput />
                <PalletPriceInput />
            </div>
            <div className={"mt-5"}>
                <VehicleDescription />
            </div>
        </div>
    </div>
}