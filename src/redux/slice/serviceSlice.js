import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  isSignedIn: false,
  isLoading: false,
  openModal: false,
  currentPage: 1,
  modalContent: {
    action: null,
    recordDataEdit: null,
    recordDataAdd: null,
    fetchData: null,
  },
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setModalStatus: (state, action) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = { ...state.modalContent, ...action.payload };
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const {
  setModalStatus,
  setModalContent,
  setIdForEditDelete,
  setChooseDate,
  setCurrentPage,
} = serviceSlice.actions;

export const serviceReducer = serviceSlice.reducer;
