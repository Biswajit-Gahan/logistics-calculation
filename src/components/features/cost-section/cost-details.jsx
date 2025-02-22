export default function CostDetails() {
    return <div>
        <div>
            <p>Cost Details</p>
        </div>

        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"}>
                <input className={"input-default-style"} placeholder={"Fuel cost / KM"} />
            </div>

            <div className={"mt-5"}>
                <p>&gt; Fuel cost = 105 Rupees / KM</p>
            </div>
        </div>
    </div>
}