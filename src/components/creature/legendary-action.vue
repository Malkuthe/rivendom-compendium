<template>
  <div class="creature-legendary-action" v-html="legendaryActionHTML"></div>
</template>

<script>
export default {
  props: {
    legendaryAction: {
      type: Object,
      required: true,
      validator: (f) => f.name && f.description,
    },
  },
  data() {
    return {
      legendaryActionHTML: null,
    };
  },
  created() {
    let legendaryActionString = `***${this.legendaryAction.name}`;
    if (this.legendaryAction.cost) {
      legendaryActionString += ` (Costs ${this.legendaryAction.cost} Actions)`;
    }
    legendaryActionString += '.*** ';
    legendaryActionString += this.legendaryAction.description;
    this.legendaryActionHTML = this.markdownify(legendaryActionString);
  },
};
</script>

<style lang="scss">
.creature-legendary-action {
  &:not(.spellcasting) {
    p {
      margin: 0;

      &:not(:first-child) {
      text-indent:1em;
      }
    }
  }
}
</style>
