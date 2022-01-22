const getters = {
  getToken: (state) => state.auth.token,
  getUsername: (state) => state.auth.username,
  formsList: (state) => state.form.list,
  totalPages: (state) => state.form.totalPages,
  currentPage: (state) => state.form.currentPage,
  lastPage: (state) => state.form.lastPage,
  activeForm: (state) => state.filled.activeForm,
  activeEditForm: (state) => state.form.activeForm
};

export default getters;
