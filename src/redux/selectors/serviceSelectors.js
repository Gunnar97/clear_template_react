export const selectCurrentPage = (state) => state.service.currentPage;
export const selectOpenModal = (state) => state.service.openModal;
export const selectModalContent = (state) => state.service.modalContent;
export const selectModalContentAction = (state) =>
  state.service.modalContent.action;
export const selectModalContentData = (state) =>
  state.service.modalContent.recordDataEdit;

export const selectIsLoading = (state) => state.service.isLoading;
