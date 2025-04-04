import useUploadDataButton from "./controller/use-upload-data-button.jsx";

export default function UploadDataButton() {
    const {
        handleSubmit
    } = useUploadDataButton();

    return <button type={"button"} onClick={handleSubmit} className={"bg-blue-500 text-neutral-50 h-10 px-4 rounded-md cursor-pointer"}>Upload Data</button>
}