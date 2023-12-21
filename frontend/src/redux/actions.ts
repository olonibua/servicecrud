// actions.js
import { ServiceAction } from "../models/Interface";
import { DELETE_SERVICE, GET_SERVICE } from "./const";

export const deleteService = (serviceId: number): ServiceAction => ({
  type: DELETE_SERVICE,
  payload: { serviceId },
});

export const saveServices = (services: Array<any>): ServiceAction => ({
  type: GET_SERVICE,
  payload: services,
});
