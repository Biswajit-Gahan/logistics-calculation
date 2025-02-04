import Container from "../../../ui/container.jsx";
import Text from "../../../ui/text.jsx";
import TextInput from "../../../ui/text-input.jsx";

export default function CostDetails() {
    return <Container>
        <Container>
            <Text>Cost Details</Text>
        </Container>

        <Container className={"mt-5 bg-neutral-50 p-5 rounded-md"} shadow={true}>
            <Container className={"grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4"}>
                <TextInput placeholder={"Fuel cost / KM"} />

                <TextInput placeholder={"Driver cost / KM"} />

                <TextInput placeholder={"Utilization cost / KM"} />
            </Container>

            <Container className={"mt-5"}>
                <Text>&gt; Fuel cost = 105 Rupees / KM</Text>
                <Text>&gt; Driver cost = 50 Rupees / KM</Text>
                <Text>&gt; Vehicle utilization cost = 30 Rupees / KM</Text>
            </Container>
        </Container>
    </Container>
}