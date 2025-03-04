export default function LoadCostSection() {
    return <div>
        <div>
            <p>Load Cost</p>
        </div>

        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"[&>*]:text-red-400"}>
                <p>&gt; Pickup location required !</p>
                <p>&gt; Drop location required !</p>
            </div>
            <div>
                <p>&gt; Pickup location = </p>
                <p>&gt; Drop location = </p>
                <p>&gt; Max load capacity (Vehicle)  = Ton</p>
                <p>&gt; Total load capacity cost (Vehicle) = Rupees</p>
                <p>&gt; Cost per KG = Rupees</p>
                <p>&gt; Total pallet booked = Nos</p>
                <p>&gt; Average weight per pallet = KG</p>
                <p>&gt; Weight slab (0% - 35%) = Rupees (150%)</p>
                <p>&gt; Weight slab (35% - 55%) = Rupees (130%)</p>
                <p>&gt; Weight slab (55% - 75%) = Rupees (125%)</p>
                <p>&gt; Weight slab (75% - 100%) = Rupees (100%)</p>
                <p>&gt; Weight slab (100% - Above) = Rupees (90%)</p>
            </div>
        </div>
    </div>
}