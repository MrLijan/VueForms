const getters = {
  formsList: (state) => state.form.list,
  totalPages: (state) => state.form.totalPages,
  currentPage: (state) => state.form.currentPage,
  lastPage: (state) => state.form.lastPage
};

export default getters;
