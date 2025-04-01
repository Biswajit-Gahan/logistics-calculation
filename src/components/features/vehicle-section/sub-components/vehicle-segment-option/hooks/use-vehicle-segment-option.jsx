import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import {vehicleData} from "../../../../../../data/data.js";
import {useEffect, useMemo, useState} from "react";
import useLoadingScreen from "../../../../loading-screen/hooks/use-loading-screen.jsx";
import config from "../../../../../../utils/config.jsx";

export default function useVehicleSegmentOption() {
    const {showLoadingScreen, hideLoadingScreen} = useLoadingScreen();

    let {
        state: {
            vehicleDetails: {vehicleSegment},
            allVehicleSegments
        },
        dispatch,
    } = useLogisticsContext();

    function onSelectHandler(event) {
        dispatch({
            type: "SET_VEHICLE_SEGMENT",
            payload: event.target.value,
        })
    }


    let vehicleSegments = useMemo(() => {
        let segments = [];
        allVehicleSegments.forEach(vehicle => {
            if(!segments.includes(vehicle.vehicleSegment)) {
                segments.push(vehicle.vehicleSegment)
            }
        })
        return segments;
    }, [vehicleSegment, allVehicleSegments])

    async function getVehicleData(signal) {
        showLoadingScreen();

        const response = await fetch(
            `${config.api.baseUrl}${config.api.getAllVehicleEndpoint}`,
            {signal: signal},
        );
        const vData = await response.json();

        dispatch({
            type: "SET_ALL_VEHICLE_SEGMENTS",
            payload: vData.data
        });
        hideLoadingScreen()
    }

    useEffect(() => {
        const abortController = new AbortController();
        getVehicleData(abortController.signal)
        return () => abortController.abort();
    }, []);


    return {vehicleSegment, onSelectHandler, allVehicleSegments: vehicleSegments}
}