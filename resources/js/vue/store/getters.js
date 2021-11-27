const getters = {
  formsList: (state) => state.form.list,
  totalPages: (state) => state.form.totalPages,
  currentPage: (state) => state.form.currentPage,
  lastPage: (state) => state.form.lastPage,
  activeForm: (state) => state.filled.activeForm,
  activeEditForm: (state) => state.form.activeForm,
  activeToasts: (state) => state.toast.messages
};

export default getters;
