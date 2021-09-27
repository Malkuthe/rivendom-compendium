<template>
  <div class="creature-header">
    <h1 class="creature-name">{{ creature.name }}</h1>
    <div class="creature-details">
      <span>{{ creature.size }} • </span>
      <span>{{ creature.alignment }} • </span>
      <span>{{ creature.type }}</span>
      <span v-if="creature.subtype"> ({{ creature.subtype }})</span>
    </div>
    <div class="creature-challenge">
      <div class="creature-cr">CR {{creature.cr}}</div>
      <div class="creature-xp">{{getXP(creature.cr)}} XP</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['creature'],
  inject: ['crxptable'],
  name: 'creature-header',
  methods: {
    getXP(cr) {
      return this.crxptable[cr];
    },
  },
};
</script>

<style lang="scss">
  .creature-header {
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: max-content auto;
    grid-template-areas:
      "name name"
      "details challenge";
    background-color: #001a12;
    color: #ffffff;
    padding: 10px 10px 5px 10px;

    .creature-name {
      margin: 0;
      grid-area: name;
      text-align: left;
    }

    .creature-details {
      grid-area: details;
      text-align: left;
      align-items: center;

      span {
        font-style: italic;
        text-transform: capitalize;
      }
    }

    .creature-challenge {
      grid-area: challenge;
      align-self: end;
      justify-self: right;
      font-size: 90%;
    }
  }
</style>
