export default function TextInput({placeholder, ...props}) {
    return <div >
        <label className={"block mb-2"}>{placeholder}</label>
        <input className={"input-default-style"} {...props} placeholder={`Enter ${placeholder.toLowerCase()}`} />
    </div>
}