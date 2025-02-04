/* eslint-disable react/prop-types */
export default function Text(
    {
        children,
        as = "p",
        id = null,
        className = "",
        ref = null,
    }
) {
    if(typeof as !== "string") {
        throw new Error("as prop must be a string");
    }

    if(typeof className !== "string") {
        throw new Error("className prop must be a string");
    }

    const textType = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    if(!textType.includes(as)) {
        throw new Error(`as prop must be a ${textType}`);
    }

    const TextComponent = as;
    const textProps = {
        id, ref
    }

    return <TextComponent
        {...textProps}
        className={className}
    >
        {children}
    </TextComponent>
}