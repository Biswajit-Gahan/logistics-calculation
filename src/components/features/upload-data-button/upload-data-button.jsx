import useUploadDataButton from "./controller/use-upload-data-button.jsx";

export default function UploadDataButton() {
    useUploadDataButton();
    return <button type={"button"} className={"bg-blue-500 text-neutral-50 h-10 px-4 rounded-md cursor-pointer"}>Upload Data</button>
}