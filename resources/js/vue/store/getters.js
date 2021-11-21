const getters = {
  formsList: (state) => state.form.list,
  totalPages: (state) => state.form.totalPages,
  currentPage: (state) => state.form.currentPage,
  lastPage: (state) => state.form.lastPage,
  activeForm: (state) => state.submit.activeForm
};

export default getters;
