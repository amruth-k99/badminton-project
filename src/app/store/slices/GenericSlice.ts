import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface GenericState {
  showAlert: boolean;
  alert?: {
    heading: string;
    alertType: "success" | "error" | "warning" | "info";
    subHeading: string;
    actionText: string;
    action: Function;
  };
  uploadImage: any;
  imageUploading: boolean;
  theme: "dark" | "light";
  resizedURLs: {
    urls: string[];
    format: number;
  }[];
}

// Define the initial state using that type
const initialState: GenericState = {
  showAlert: false,
  alert: undefined,
  theme: "light",
  uploadImage: null,
  imageUploading: false,
  resizedURLs: [],
};

export const genericSlice = createSlice({
  name: "generic",
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<GenericState["alert"]>) => {
      state.showAlert = true;
      state.alert = action.payload;
    },
    hideAlert: (state) => {
      state.showAlert = false;
      state.alert = undefined;
    },
    toggleTheme: (state, action: PayloadAction<GenericState["theme"]>) => {
      document.getElementsByTagName("html")[0].className = action.payload;
      localStorage.setItem("theme", action.payload);
      state.theme = action.payload;
    },

    setUploadImage: (state, action: PayloadAction<string | null>) => {
      state.uploadImage = action.payload;
      state.imageUploading = false;
      state.resizedURLs = [];
    },

    setProcessingImage: (state, action: PayloadAction<boolean>) => {
      state.imageUploading = action.payload;
    },

    setResizedURLs: (
      state,
      action: PayloadAction<GenericState["resizedURLs"]>
    ) => {
      state.resizedURLs = action.payload;
    },
  },
});

export const {
  hideAlert,
  showAlert,
  setUploadImage,
  setProcessingImage,
  toggleTheme,
  setResizedURLs,
} = genericSlice.actions;

export default genericSlice.reducer;
