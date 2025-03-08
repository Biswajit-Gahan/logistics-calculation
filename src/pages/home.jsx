import VehicleDetails from "../components/features/vehicle-section/vehicle-details.jsx";
import ShipmentDetails from "../components/features/shipment-section/shipment-details.jsx";
import CostDetails from "../components/features/cost-section/cost-details.jsx";
import LogisticsContext from "../context/logistics-context.jsx";
import AllDetailsSection from "../components/features/all-details-section/all-details-section.jsx";
import SaveButton from "../components/features/save-button/save-button.jsx";

export default function Home() {
    return <LogisticsContext>
        <div className={"px-4 md:px-10"}>
            <div>
                <h1 className={"text-xl font-black mt-4 text-center"}>Logistics Calculations</h1>
            </div>
            <div className={"mt-10"}>
                <VehicleDetails />
            </div>
            <div className={"mt-5"}>
                <ShipmentDetails />
            </div>
            <div className={"mt-5"}>
                <CostDetails />
            </div>
            <div className={"mt-5"}>
                <AllDetailsSection />
            </div>
            <div className={"mt-5"}>
                <SaveButton />
            </div>
            <div>
                <p className={"text-xs my-5 text-center text-neutral-400"}>Logistics Calculation Simulation | {new Date().getFullYear()}</p>
            </div>
        </div>
    </LogisticsContext>
}