// reducers.js
import { ServiceAction, ServiceState } from "../models/Interface";
import { DELETE_SERVICE, GET_SERVICE } from "./const";

const initialState: ServiceState = {
  services: [],
};

export const serviceReducer = (
  state: ServiceState = initialState,
  action: ServiceAction
) => {
  switch (action.type) {
    case GET_SERVICE:
      return {
        ...state,
        services: action.payload,
      };
    case DELETE_SERVICE:
      const { serviceId } = action.payload;
      // Implement your logic to remove the service with the specified ID
      const updatedServices = state.services.filter(
        (service) => service._id !== serviceId
      );

      return {
        ...state,
        services: updatedServices,
      };

    // Add other cases as needed for different actions

    default:
      return state;
  }
};
