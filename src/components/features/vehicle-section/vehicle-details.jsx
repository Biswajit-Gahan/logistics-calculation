import Container from "../../../ui/container.jsx";
import Text from "../../../ui/text.jsx";
import ListWrapper from "../../../ui/list-wrapper.jsx";

export default function VehicleDetails() {
    return <Container>
        <Container>
            <Text>Vehicle Details</Text>
        </Container>

        <Container className={"mt-5 bg-neutral-50 p-5 rounded-md"} shadow={true}>
            <Container className={"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"}>
                <ListWrapper>
                    <option value={""}>Vehicle segment</option>
                    <option value={"mini-truck"}>Mini Truck</option>
                    <option value={"full-truck"}>Full Truck</option>
                </ListWrapper>

                <ListWrapper>
                    <option value={""}>Vehicle type</option>
                    <option value={"mini-truck"}>Mini Truck</option>
                    <option value={"full-truck"}>Full Truck</option>
                </ListWrapper>

                <ListWrapper>
                    <option value={""}>Vehicle mileage / KM</option>
                    <option value={"mini-truck"}>Mini Truck</option>
                    <option value={"full-truck"}>Full Truck</option>
                </ListWrapper>
            </Container>

            <Container className={"mt-5"}>
                <Text>&gt; Vehicle segment = Mini Truck</Text>
                <Text>&gt; Vehicle type = Tata Ace</Text>
                <Text>&gt; Vehicle mileage = 10 Rupees / KM</Text>
                <Text>&gt; Length of container = 4 Feet</Text>
                <Text>&gt; Width of container = 4 Feet</Text>
                <Text>&gt; Max load capacity (Vehicle) = 0.75 Ton</Text>
                <Text>&gt; Pallet size = 4 * 3 Feet</Text>
                <Text>&gt; Pallet space in vehicle = 2 Nos.</Text>
                <Text>&gt; Max load capacity (Pallet) = 0.75 Ton</Text>
            </Container>
        </Container>
    </Container>
}