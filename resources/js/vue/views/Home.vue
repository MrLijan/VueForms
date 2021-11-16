<template>
  <div>
    <!-- PAGE HEADER -->
    <section class="home-header">
      <h1 class="is-size-1">All Forms</h1>
      <router-link to="/creator">
        <button class="button is-success">NEW FORM</button>
      </router-link>
    </section>

    <!-- FORMS LIST -->
    <section class="table-container" v-if="forms.length != 0">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th>Author</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="form in forms" :key="form">
            <td>
              <span class="tag is-light is-info has-text-weight-semibold">
                {{ form.key }}
              </span>
            </td>
            <td class="has-text-weight-bold">
              {{ form.name }}
            </td>
            <td>{{ form.creator }}</td>
            <td class="subtitle has-text-weight-semibold has-text-centered">
              {{ form.filled_count }}
            </td>
            <td class="is-flex">
              <button
                class="button is-small is-light is-link"
                @click="redirectUser(`/submit/${form.key}`)"
              >
                <Icon src="external_link" class="ex-link" />
              </button>
              <button
                class="button is-small is-light is-warning"
                @click="redirectUser(`/edit/${form.key}`)"
              >
                <Icon src="pen" stroke="hsl(48, 100%, 67%)" />
              </button>
              <button
                class="button is-small is-light is-danger"
                @click="deleteForm(form.key)"
              >
                <Icon src="trash" stroke="hsl(11, 82%, 55%)" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- IF FORM IS EMPTY -->
    <section class="table-container has-text-centered" v-else>
      <h2>There are no forms here...</h2>
      <p>You can create new form by clicking on NEW FORM</p>
    </section>

    <!-- PAGINATION -->
    <section class="is-flex is-justify-content-center" v-if="total_pages > 1">
      <div class="pagination">
        <ul class="pagination-list">
          <li
            v-for="(page, index) in total_pages"
            :key="index"
            @click="fetchForms(page)"
          >
            <a
              class="pagination-link"
              :class="current_page == page ? 'is-current' : ''"
            >
              {{ page }}
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import FormHeader from "../components/FormHeader";
import FormBody from "../components/FormBody";
import FormInput from "../components/FormInput";
import Icon from "../components/Icon";

export default {
  components: {
    FormHeader,
    FormBody,
    FormInput,
    Icon
  },
  setup() {
    // Variables:
    const store = useStore();
    const router = useRouter();

    // Pagination handling
    const total_pages = computed(() => store.state.form.total_pages);
    const current_page = computed(() => store.state.form.current_page);

    // Handle User Redirection:
    const redirectUser = (path) => {
      router.push(path);
    };

    // Dispatch Fetching the form:
    function fetchForms(page = 1) {
      store.dispatch("form/getForms", page);
    }

    const forms = computed(() => store.state.form.forms);

    fetchForms();

    // Deletion Handler:
    const deleteForm = (key) => {
      if (
        window.confirm(
          `You are about to delete Form number ${key}\n Are you sure?`
        )
      ) {
        store.dispatch("form/deleteForm", key);
      } else {
        console.log("ABORT");
      }
    };

    // END OF SETUP
    return {
      redirectUser,
      forms,
      fetchForms,
      deleteForm,
      total_pages,
      current_page
    };
  }
};
</script>

<style lang="css" scoped>
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
}

.home-header > h1 {
  font-weight: 900;
  color: var(--app-border);
}

.container > * {
  margin-bottom: 20px;
}

.table-container {
  padding: var(--app-container-paddding);

  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid var(--app-green);
}

table {
  table-layout: auto;
}

td > * {
  margin-left: 5px !important;
  overflow: hidden !important;
}

td {
  border: none !important;
}

tr {
  border-bottom: 1px solid #dbdbdb;
}

/* PAGINATION STYLES */
.is-current {
  background-color: var(--app-green) !important;
  border-color: var(--app-green) !important;
}
</style>
