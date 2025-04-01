import {useLogisticsContext} from "../../../../context/logistics-context.jsx";

export default function useUploadDataButton() {
    const {
        state: {
            costDetails: {
                totalDistanceCost,
                totalLoadCost,
            }
        }
    } = useLogisticsContext();

    console.log(totalDistanceCost, totalLoadCost)

}