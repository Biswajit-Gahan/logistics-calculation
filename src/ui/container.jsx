/* eslint-disable react/prop-types */
export default function Container(
    {
        children,
        className = "",
        as = "div",
        id = null,
        ref = null,
        shadow = false,
    }
) {
    if(typeof as !== "string") {
        throw new Error("as prop must be a string");
    }

    if(typeof className !== "string") {
        throw new Error("className prop must be a string");
    }

    const containerType = ["div", "main", "aside", "section", "nav", "footer", "article", "header"];

    if(!containerType.includes(as)) {
        throw new Error(`as prop must be a ${containerType}`);
    }

    const ContainerComponent = as;
    const containerProps = {
        id, ref
    }

    const boxShadow = {
        boxShadow: '0px 4px 8px -4px rgba(0,0,0,0.1)',
        MozBoxShadow: '0px 4px 8px -4px rgba(0,0,0,0.1)',
        WebkitBoxShadow: '0px 4px 8px -4px rgba(0,0,0,0.1)',
    }

    return <ContainerComponent
        {...containerProps}
        className={className}
        style={shadow ? boxShadow : {}}
    >
        {children}
    </ContainerComponent>
}