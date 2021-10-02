<template>
  <creature-statbox>
    <div class="entry">
      <div class="label hp-label">Hit Points</div>
      <div class="value creature-hp">{{creature.hp}}</div>
    </div>
    <div class="entry">
      <div class="label ac-label">Armor Class</div>
      <div class="value creature-ac">
        {{creature.ac}}<span v-if="creature.armor"> ({{creature.armor}})</span>
      </div>
    </div>
    <div class="entry">
      <div class="label speed-label">Movement Speed</div>
      <div class="value creature-speed">{{creature.speed}}</div>
    </div>
  </creature-statbox>
</template>

<script>
import statbox from '@/components/creature/statbox.vue';

export default {
  props: ['creature'],
  components: {
    'creature-statbox': statbox,
  },
};
</script>
