// eslint-disable-next-line react/prop-types
export default function ListWrapper({children}) {
    return <div className={"w-full bg-[var(--default-bg-color)] p-3 rounded-md"}>
        <select defaultValue={""} className={"w-full outline-0"}>
            {children}
        </select>
    </div>
}