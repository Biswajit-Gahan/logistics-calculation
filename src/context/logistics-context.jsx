import {createContext, useContext, useReducer} from "react";

const Context = createContext(null);

const initialState = {
    vehicleDetails: {
        vehicleSegment: "",
        vehicleType: "",
        vehicleMileage: 0,
        lengthOfContainer: 0,
        widthOfContainer: 0,
        vehicleMaxLoadCapacity: 0,
        palletWidth: 0,
        palletHeight: 0,
        palletSpaceInVehicle: 0,
        palletPrice: 0,
        palletMaxLoadCapacity: 0,
    }
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case "SET_VEHICLE_SEGMENT": {
            let newPayload = {
                ...initialState.vehicleDetails,
                vehicleSegment: payload,
            }
            return {...state, vehicleDetails: {...newPayload}};
        }
        case "SET_VEHICLE_TYPE": {
          let newPayload = {
              ...initialState.vehicleDetails,
              vehicleSegment: state.vehicleDetails.vehicleSegment,
              vehicleType: payload
          }
          return {...state, vehicleDetails: {...newPayload}};
        }
        case "SET_VEHICLE_MILEAGE": {
            let newPayload = {
                vehicleMileage: payload || 0,
            }
            return {...state, vehicleDetails: {...state.vehicleDetails, ...newPayload}};
        }
        case "SET_PALLET_PRICE": {
            let newPayload = {
                palletPrice: payload || 0,
            }
            return {...state, vehicleDetails: {...state.vehicleDetails, ...newPayload}};
        }
        default: return {...state};
    }
}

export default function LogisticsContext({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
}

export function useLogisticsContext() {
    const context = useContext(Context);

    if(!context){
        throw new Error("useLogisticsStore must be used within context");
    }

    return context;
}