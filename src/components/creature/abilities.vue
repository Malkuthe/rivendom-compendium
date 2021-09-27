<template>
  <div class="creature-abilities">
    <div v-for="(value,name) of abilities" :key="name"
        class="entry" :class="`entry-${name}`">
      <div class="value" :class="`value-${name}`">{{value}} ({{getModifier(value)}})</div>
      <div class="label" :class="`label-${name}`">{{name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],
  methods: {
    getModifier(score) {
      const mod = Math.floor((score - 10) / 2);
      return mod >= 0 ? `+${mod}` : mod;
    },
  },
  data() {
    return {
      abilities: null,
    };
  },
  created() {
    this.abilities = {
      str: this.source.str,
      dex: this.source.dex,
      con: this.source.con,
      int: this.source.int,
      wis: this.source.wis,
      cha: this.source.cha,
    };
  },
};
</script>

<style lang="scss">
  .creature-abilities {
    display: grid;
    justify-items: stretch;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 0.5em;
    margin-top: 0.5em;

    .entry {
      background-color:#81cab350;
      border: 1px solid #cbd4d1;
      border-radius: 0.5em;
      padding: 5px 10px 10px 10px;
      display: grid;
      row-gap: 0.25em;
      grid-template-rows: 70% auto;
      align-items: center;
      justify-items: center;

      .label {
        text-transform: uppercase;
        font-size: 80%;
        font-weight: bold;
      }
    }
  }
</style>
