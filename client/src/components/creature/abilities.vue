<template>
  <div class="creature-abilities">
    <div v-for="ability in abilities" :key="ability"
        class="entry" :class="`entry-${ability}`">
      <div class="value" :class="`value-${ability}`">
        {{source[ability]}} ({{getModifier(source[ability])}})
      </div>
      <div class="label" :class="`label-${ability}`">{{ability}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['source'],
  inject: ['abilityOrder'],
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
    this.abilities = Object.keys(this.source)
      .sort((a, b) => this.abilityOrder.indexOf(a) - this.abilityOrder.indexOf(b));
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
