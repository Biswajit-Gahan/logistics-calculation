import {useLogisticsContext} from "../../../../../../context/logistics-context.jsx";
import {vehicleData} from "../../../../../../data/data.js";
import {useEffect, useMemo, useState} from "react";
import useLoadingScreen from "../../../../loading-screen/hooks/use-loading-screen.jsx";

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
            "http://3.111.239.217:9001/calculation/get/all/vehicle/details",
            {signal: signal},
        );
        const vData = await response.json();

        dispatch({
            type: "SET_ALL_VEHICLE_SEGMENTS",
            payload: vData.data
        })
    }

    useEffect(() => {
        const abortController = new AbortController();
        getVehicleData(abortController.signal).finally(hideLoadingScreen());
        return () => abortController.abort();
    }, []);


    return {vehicleSegment, onSelectHandler, allVehicleSegments: vehicleSegments}
}