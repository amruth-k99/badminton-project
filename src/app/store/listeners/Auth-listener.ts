// listeners for the store
import API from "@/utils/fetchUtils";
import ENDPOINT from "@/config/endpoints";
import { startListening } from ".";
import { logoutUserFromCookie } from "@/utils/cookies";
import { setAuth, setUserData } from "../slices/AuthSlice";
import { dispatch } from "../store";

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
export const AuthListener = () => {
  return startListening({
    actionCreator: setAuth,
    effect: async (action, listenerApi) => {
      // Can cancel other running instances
      listenerApi.cancelActiveListeners();

      // Run async logic
      // const data = await fetchData();
      try {
        const userDetailsResponse = await API.GET(ENDPOINT.getUserDetails, {});

        if (userDetailsResponse?.user) {
          dispatch(
            setUserData({
              user: userDetailsResponse?.user,
              userProfile: userDetailsResponse?.profile,
            })
          );
        }
      } catch (error: any) {
        console.log("[authListenerMiddleware] error: ", error.message);
        if (error.message === "Unauthorized") {
          listenerApi.dispatch(setAuth(""));
          listenerApi.cancelActiveListeners();
          logoutUserFromCookie();
        }
      }
    },
  });
};
