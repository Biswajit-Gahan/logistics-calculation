import Container from "../ui/container.jsx";
import Text from "../ui/text.jsx";
import VehicleDetails from "../components/features/vehicle-section/vehicle-details.jsx";
import ShipmentDetails from "../components/features/shipment-section/shipment-details.jsx";
import CostDetails from "../components/features/cost-section/cost-details.jsx";

export default function Home() {
    return <Container className={"px-4 md:px-10"}>
        <Container>
            <Text as={"h1"} className={"text-xl font-black mt-4 text-center"}>Logistics Calculations</Text>
        </Container>

        <Container className={"mt-10"}>
            <VehicleDetails />
        </Container>

        <Container className={"mt-5"}>
            <ShipmentDetails />
        </Container>

        <Container className={"mt-5"}>
            <CostDetails />
        </Container>

        <Container>
            <Text className={"text-xs my-5 text-center text-neutral-400"}>Logistics Calculation Simulation | {new Date().getFullYear()}</Text>
        </Container>
    </Container>
}