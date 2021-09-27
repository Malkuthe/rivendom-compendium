<template>
  <div class="creature">
    <div class="creature-loading" v-if="!creature">
      Loading...
    </div>
    <div class="creature-notfound" v-else-if="creature=='notfound'">
      Oops! That creature is cannot be found! It might have wandered off.
    </div>
    <creature-statblock v-else :creature="creature"/>
  </div>
</template>

<script>
import statblock from '@/components/creature/statblock.vue';

export default {
  name: 'Creature',
  components: {
    'creature-statblock': statblock,
  },
  data() {
    return {
      creature: null,
      saves: null,
      skills: null,
    };
  },
  created() {
    this.axios
      .get(`https://api.rivendom.net/creature/${this.$route.params.creature_id}`)
      .then((response) => {
        this.creature = response.data.result;
      })
      .catch((error) => {
        if (error) { this.creature = 'notfound'; }
      });
  },
};
</script>

<style lang="scss">
.creature {
  @include breakpoint(m) {
    padding-top: 30px;
  }
}
</style>
