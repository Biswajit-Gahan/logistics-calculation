export default function ShipmentDetails() {
    return <div>
        <div>
            <p>Shipment Details</p>
        </div>

        <div className={"mt-5 bg-neutral-50 p-5 rounded-md box-shadow-down"}>
            <div className={"grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4"}>
                <input className={"input-default-style"} placeholder={"Pickup location"} />

                <input className={"input-default-style"} placeholder={"Drop location"} />

                <div className={"select-wrapper-default-style"}>
                    <select className={"w-full outline-0"}>
                        <option value={""} disabled={true}>Shipment type</option>
                        <option value={"ambient"}>Ambient</option>
                        <option value={"frozen"}>Frozen</option>
                        <option value={"chilled"}>Chilled</option>
                    </select>
                </div>

                <input className={"input-default-style"} placeholder={"Total weight booked (KG)"} />

                <input className={"input-default-style"} placeholder={"Travel Distance (KM)"} />

                <input className={"input-default-style"} placeholder={"Travel Time (Hr)"} />
            </div>

            <div className={"mt-5"}>
                <p>&gt; Pickup location = Bhubaneswar</p>
                <p>&gt; Drop location = Kolkata</p>
                <p>&gt; Shipment type = Ambient</p>
                <p>&gt; Total weight booked - 500 KG</p>
                <p>&gt; Travel Distance - 500 KM</p>
                <p>&gt; Travel Time - 5.30 Hour</p>
            </div>
        </div>
    </div>
}