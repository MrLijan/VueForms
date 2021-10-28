<template>
  <section class="container">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="i.e. Boring Wozniak" />
      </div>
    </div>
    <div class="field">
      <label class="label">Type</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Regular Input</option>
            <option>Paragraph</option>
            <option>Checkbox</option>
            <option>Dropdown</option>
            <option>Progress bar</option>
            <option>Date</option>
          </select>
        </div>
      </div>
    </div>
    <div class="required is-pulled-right">
      <label class="checkbox">
        <input type="checkbox" />
        Required field
      </label>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  }
};
</script>

<style lang="css" scoped>
.container {
  box-sizing: border-box;
  padding: var(--app-container-paddding);

  border-radius: 8px;
  border: 1px solid var(--app-border);
  background-color: var(--app-white);
  border-top: 6px solid #48c774;
}

.checkbox {
  overflow: hidden !important;
}
</style>
