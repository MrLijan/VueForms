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
    <section class="table-container" v-if="list.length != 0">
      <table class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Key</th>
            <th>Name</th>
            <th class="">Author</th>
            <th class="has-text-centered">Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(form, index) in list" :key="index">
            <td>
              <span class="tag is-light is-info has-text-weight-semibold">
                {{ form.key }}
              </span>
            </td>
            <td class="has-text-weight-bold form-name">
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
    <section class="is-flex is-justify-content-center" v-if="lastPage > 1">
      <div class="pagination">
        <ul class="pagination-list">
          <li
            v-for="(page, index) in lastPage"
            :key="index"
            @click="fetchList(page)"
          >
            <a
              class="pagination-link"
              :class="currentPage == page ? 'is-current' : ''"
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
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import FormBody from "../components/FormBody";
import FormInput from "../components/FormInput";
import Icon from "../components/Icon";

export default {
  components: {
    FormBody,
    FormInput,
    Icon
  },

  setup() {
    // VARS:
    const store = useStore();
    const router = useRouter();

    // -> Table's data logics:
    function fetchList(page = 1) {
      store.dispatch("form/getList", page);
    }

    const list = computed(() => store.getters.formsList);

    fetchList();

    // -> Table pagination:
    const lastPage = computed(() => store.getters["lastPage"]);
    const currentPage = computed(() => store.getters["currentPage"]);

    // -> User redirection logics:
    const redirectUser = (path) => {
      router.push(path);
    };

    // -> Form deletion logics:
    const deleteForm = (key) => {
      if (
        window.confirm(
          `You are about to delete the following form:\n FormID: ${key}\n Are you sure?`
        )
      ) {
        store.dispatch("form/deleteForm", key);
      } else {
        console.log("ABORT");
      }
    };

    // END OF SETUP
    return {
      fetchList,
      list,
      redirectUser,
      deleteForm,
      lastPage,
      currentPage
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

.form-name {
  width: 100%;
}

/* PAGINATION STYLES */
.is-current {
  background-color: var(--app-green) !important;
  border-color: var(--app-green) !important;
}
</style>
