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
        totalCostOfVehicleLoadCapacity: 0,
        palletWidth: 0,
        palletHeight: 0,
        palletSpaceInVehicle: 0,
        palletPrice: 0,
        palletMaxLoadCapacity: 0,
    },
    shipmentDetails: {
        pickupLocation: "",
        dropLocation: "",
        shipmentType: "",
        totalWeightBooked: 0,
        travelDistance: 0,
        travelTime: 0
    },
    costDetails: {
        fuelCost: 0,
        shipmentTypeCost: 0,
    }
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case "SET_VEHICLE_SEGMENT": {
            let newPayload = {
                ...initialState.vehicleDetails,
                vehicleSegment: payload,
            }
            return {...state, vehicleDetails: newPayload};
        }
        case "SET_VEHICLE_TYPE": {
          let newPayload = {
              ...initialState.vehicleDetails,
              vehicleSegment: state.vehicleDetails.vehicleSegment,
              vehicleType: payload
          }
          return {...state, vehicleDetails: newPayload};
        }
        case "SET_VEHICLE_MILEAGE": {
            let newPayload = {
                ...state.vehicleDetails,
                vehicleMileage: payload || 0,
            }
            return {...state, vehicleDetails: newPayload};
        }
        case "SET_PALLET_PRICE": {
            let newPayload = {
                ...state.vehicleDetails,
                palletPrice: payload || 0,
            }
            return {...state, vehicleDetails: newPayload};
        }
        case "SET_PICKUP_LOCATION": {
            let newPayload = {
                ...state.shipmentDetails,
                pickupLocation: payload,
            }
            return {...state, shipmentDetails: newPayload};
        }
        case "SET_DROP_LOCATION": {
            let newPayload = {
                ...state.shipmentDetails,
                dropLocation: payload,
            }
            return {...state, shipmentDetails: newPayload};
        }
        case "SET_SHIPMENT_TYPE": {
            let newPayload = {
                ...state.shipmentDetails,
                shipmentType: payload,
            }
            return {...state, shipmentDetails: newPayload};
        }
        case "SET_TOTAL_WEIGHT_BOOKED": {
            let newPayload = {
                ...state.shipmentDetails,
                totalWeightBooked: payload || 0,
            }
            return {...state, shipmentDetails: newPayload};
        }
        case "SET_TRAVEL_DISTANCE": {
            let newPayload = {
                ...state.shipmentDetails,
                travelDistance: payload || 0,
            }
            return {...state, shipmentDetails: newPayload};
        }
        case "SET_TRAVEL_TIME": {
            let newPayload = {
                ...state.shipmentDetails,
                travelTime: payload || 0,
            }
            return {...state, shipmentDetails: newPayload};
        }
        case "SET_FUEL_COST": {
            let newPayload = {
                ...state.costDetails,
                fuelCost: payload || 0,
            }
            return {...state, costDetails: newPayload};
        }
        case "SET_SHIPMENT_TYPE_COST": {
            let newPayload = {
                ...state.costDetails,
                shipmentTypeCost: payload || 0,
            }
            return {...state, costDetails: newPayload};
        }
        case "SET_TOTAL_COST_OF_VEHICLE_LOAD_CAPACITY": {
            let newPayload = {
                ...state.vehicleDetails,
                totalCostOfVehicleLoadCapacity: payload || 0,
            }
            return {...state, vehicleDetails: newPayload};
        }
        default: return state;
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