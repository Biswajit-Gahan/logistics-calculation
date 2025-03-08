export default function SelectInput({placeholder, children, ...props}) {
    return <div >
        <label className={"block mb-2"}>{placeholder}</label>
        <div className="select-wrapper-default-style">
            <select className={"w-full outline-0"} {...props}>
                {children}
            </select>
        </div>
    </div>
}