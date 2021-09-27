<template>
  <div class="creature-statblock">
    <creature-header :creature="creature"/>
    <div class="creature-statistics">
      <creature-stats-basic :creature="creature" />
      <creature-abilities :source="creature.abilities" />
      <creature-stats-additional :creature="creature" />
      <section class="creature-traits" v-if="creature.traits">
        <h2 class="section-header">Traits</h2>
        <creature-feature v-for="trait in creature.traits" :key="trait" :feature="trait"/>
      </section>
      <section class="creature-actions" v-if="creature.actions || creature.attacks">
        <h2 class="section-header">Actions</h2>
        <creature-feature v-if="creature.multiattack"
            :feature="{name: 'Multiattack', description: creature.multiattack.description}" />
        <section class="creature-attacks" v-if="creature.attacks">
          <creature-attack v-for="attack in creature.attacks" :key="attack" :attack="attack" />
        </section>
        <section class="creature-actions" v-if="creature.actions">
          <creature-feature v-for="action in creature.actions" :key="action" :feature="action" />
        </section>
      </section>
      <section class="creature-reactions" v-if="creature.reactions">
        <creature-feature v-for="reaction in creature.reactions"
          :key="reaction" :feature="reaction" />
      </section>
      <section class="creature-legendary-actions" v-if="creature.legendaryActions">
        <h2 class="section-header">Legendary Actions</h2>
        <div class="description" v-html="this.markdownify(this.legendaryActionsDescription)"></div>
        <creature-legendary-action v-for="action in legendaryActions"
          :key="action"
          :legendary-action="action" />
      </section>
    </div>
  </div>
</template>

<script>
import header from '@/components/creature/header.vue';
import feature from '@/components/creature/feature.vue';
import abilities from '@/components/creature/abilities.vue';
import basicStats from '@/components/creature/basic-statistics.vue';
import addtlStats from '@/components/creature/additional-statistics.vue';
import attack from '@/components/creature/attack.vue';
import legendaryAction from '@/components/creature/legendary-action.vue';

export default {
  name: 'Creature Statblock',
  props: ['creature'],
  components: {
    'creature-header': header,
    'creature-feature': feature,
    'creature-abilities': abilities,
    'creature-stats-basic': basicStats,
    'creature-stats-additional': addtlStats,
    'creature-attack': attack,
    'creature-legendary-action': legendaryAction,
  },
  data() {
    return {
      legendaryActionDescription: null,
      legendaryActions: null,
    };
  },
  created() {
    if (this.creature.legendaryActions) {
      const { description, ...actions } = this.creature.legendaryActions;
      this.legendaryActionsDescription = description;
      this.legendaryActions = actions;
    }
  },
  mounted() {
    if (this.$el.clientHeight > 600) {
      this.$el.classList.add('2-columns');
    }
  },
};
</script>

<style lang="scss">
.creature-statblock {
  margin: 0 auto;
  padding: 0.5em;
  border: 1px solid rgba(0,0,0,0.4);
  box-shadow: 0px 5px 10px 0px #50576240;
  border-left: none;
  border-right: none;
  border-top: none;
  font-size: 90%;
  text-align: left;
  @include breakpoint(xl) {
    columns: 2;
  }

  @include breakpoint(m) {
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,0.4);
    overflow: hidden;
  }

  .section-header {
    font-size: 115%;
    text-align: left;
    background-color:#81cab350;
    padding: 0.25em;
    border-radius: 0.25em;
    border: 1px solid #cbd4d1;
    margin: 0.5em 0 0 0;
    break-after: avoid;
  }

  .creature-header {
    border-radius: 0.5em;
  }

  .creature-feature {
    break-inside: avoid;
  }

  &:not(.2-columns) {
    max-width: 500px;

    @include breakpoint(l) {
      float: right;
    }

    .creature-statistics {
      padding: 0 0.5em;
    }

    .creature-header {
      border-radius: 0px;
    }
  }
}
</style>
