// listeners for the store
import {
  createListenerMiddleware,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { AppDispatch, AppRootState } from "../store";

export const listenerMiddleware = createListenerMiddleware();

export type StartListening = TypedStartListening<AppRootState, AppDispatch>;

export const startListening =
  listenerMiddleware.startListening as StartListening;

export * from "./Auth-listener";
