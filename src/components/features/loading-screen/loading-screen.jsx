export default function LoadingScreen({id}) {
    return <div id={id} className={"hidden"}>
        <div className={"fixed top-0 left-0 w-full h-dvh backdrop-blur-[5px] bg-neutral-200/15 flex items-center justify-center select-none"}>
            <div>
                <div className={"w-10 h-10 border-3 border-blue-500 border-dashed rounded-full mx-auto animate-spin"}></div>
                <p className={"mt-2 text-center"} id={"loading-message"}></p>
            </div>
        </div>
    </div>
}