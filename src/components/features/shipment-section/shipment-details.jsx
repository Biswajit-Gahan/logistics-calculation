import Container from "../../../ui/container.jsx";
import Text from "../../../ui/text.jsx";
import ListWrapper from "../../../ui/list-wrapper.jsx";
import TextInput from "../../../ui/text-input.jsx";

export default function ShipmentDetails() {
    return <Container>
        <Container>
            <Text>Shipment Details</Text>
        </Container>

        <Container className={"mt-5 bg-neutral-50 p-5 rounded-md"} shadow={true}>
            <Container className={"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"}>
                <TextInput placeholder={"Pickup location"} />

                <TextInput placeholder={"Drop location"} />

                <ListWrapper>
                    <option value={""}>Shipment type</option>
                    <option value={"mini-truck"}>Mini Truck</option>
                    <option value={"full-truck"}>Full Truck</option>
                </ListWrapper>

                <TextInput placeholder={"Total weight booked (KG)"} />

                <TextInput placeholder={"Travel Distance (KM)"} />

                <TextInput placeholder={"Travel Time (Hr)"} />
            </Container>

            <Container className={"mt-5"}>
                <Text>&gt; Pickup location = Bhubaneswar</Text>
                <Text>&gt; Drop location = Kolkata</Text>
                <Text>&gt; Shipment type = Ambient</Text>
                <Text>&gt; Total weight booked - 500 KG</Text>
                <Text>&gt; Travel Distance - 500 KM</Text>
                <Text>&gt; Travel Time - 5.30 Hour</Text>
            </Container>
        </Container>
    </Container>
}