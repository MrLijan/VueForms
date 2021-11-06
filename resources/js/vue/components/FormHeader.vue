<template>
  <section class="container">
    <div class="field">
      <label class="label">Give it a name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="i.e. Boring Wozniak"
          :value="name"
          @input="$emit('update:name', $event.target.value)"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">What's your name?</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="i.e. Liram Jan"
          :value="creator"
          @input="$emit('update:creator', $event.target.value)"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Describe it</label>
      <textarea
        class="textarea"
        rows="3"
        placeholder="The following form will be used for..."
        :value="description"
        @input="$emit('update:description', $event.target.value)"
      ></textarea>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    creator: {
      type: String,
      default: ""
    }
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
  border-top: 6px solid var(--app-field-top);
}
</style>
