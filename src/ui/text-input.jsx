/* eslint-disable react/prop-types */

export default function TextInput(
    {
        id = null,
        className = "",
        ref = null,
        placeholder = "",
    }
) {
    if(typeof className !== "string") {
        throw new Error("className prop must be a string");
    }

    const textInputProps = {
        id, ref, placeholder
    }

    return <input
        {...textInputProps}
        className={`w-full bg-[var(--default-bg-color)] p-3 rounded-md outline-0 ${className}`}
        type={"text"}
    />
}