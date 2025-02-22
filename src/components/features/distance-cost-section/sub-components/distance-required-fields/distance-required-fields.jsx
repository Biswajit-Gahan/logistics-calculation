import useDistanceRequiredFields from "./hooks/use-distance-required-fields.jsx";

export default function DistanceRequiredFields() {
    let {
        dropLocation,
        pickupLocation
    } = useDistanceRequiredFields();

    if(dropLocation && pickupLocation) return null

    return <div className={"[&>*]:text-red-400"}>
        {
            !pickupLocation && <p>&gt; Pickup location required !</p>
        }
        {
            !dropLocation && <p>&gt; Drop location required !</p>
        }
    </div>
}