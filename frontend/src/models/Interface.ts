import { ChangeEvent } from "react";
import Service from "../pages/service/Service";
import { DELETE_SERVICE, GET_SERVICE } from "../redux/const";

// types.ts

// types.ts
export interface User {
  accessToken: any;
  // Define the properties of your user object here
  // For example, if your user has an id, name, and email, you can do:
  id: number;
  name: string;
  email: string;
}

export interface UserContextProps {
  user: User | null;
  setLoggedInUser: (loggedUser: User) => void;
  logoutUser: () => void;
}

export interface SignInProps {
  setOpenSignIn: (value: boolean) => void;
}
export interface registerUserProps {
  setOpenRegister: (value: boolean) => void;
  setOpenSignIn: (value: boolean) => void;
}
export interface Contact {
  name: string;
  email: string;
  phone: string;
}

export interface IFormData {
  service: string;
  category: string;
  contact: Contact;
}

export interface Service {
  _id: number;
}

export interface ServiceState {
  services: Service[];
}

export interface CreateFormProps {
  handleFormData: (e: ChangeEvent<HTMLInputElement>) => void;

  formData: {
    service: string;
    category: string;
    contact: { name: string; email: string; phone: string };
  };
  createService: () => void;
  message: String;
  isMessageVisible: boolean;
}

export interface EditFormProps {
  handleFormData: (e: ChangeEvent<HTMLInputElement>) => void;

  formData: {
    service: string;
    category: string;
    contact: { name: string; email: string; phone: string };
  };
  editService: () => void;
}

export interface DeleteServiceAction {
  type: typeof DELETE_SERVICE;
  payload: {
    serviceId: number;
  };
}

export interface SaveServicesAction {
  type: typeof GET_SERVICE;
  payload: Service[];
}

export type ServiceAction = DeleteServiceAction | SaveServicesAction;
