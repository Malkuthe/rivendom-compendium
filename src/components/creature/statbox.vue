<template>
  <div class='creature-statbox' :style="cssProps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    labelWidth: { default: '30%' },
    topMargin: { default: '1em' },
  },
  computed: {
    cssProps() {
      return {
        '--label-width': this.labelWidth,
        '--top-margin': this.topMargin,
      };
    },
  },
};
</script>

<style lang="scss">
  .creature-statbox {
    border-radius: 0.5em;
    overflow: hidden;
    margin-top: var(--top-margin);
    border: 1px solid #cbd4d1;
    background-color:#81cab320;

    .entry {
      display: grid;
      grid-template-columns: var(--label-width) auto;

      &:not(:last-child) {
        border-bottom: 1px solid #cbd4d1;
      }

      .label {
        font-weight: bold;
        align-self: center;
        text-transform: uppercase;
        padding-right: 0.25em;
        font-size: 75%;
        text-align: right;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color:#81cab350;
      }

      .value {
        text-align: left;
        margin-left: 0.5em;
        font-size: 90%;
        align-items: center;
      }
    }
  }
</style>
