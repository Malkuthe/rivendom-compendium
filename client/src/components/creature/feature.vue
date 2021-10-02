<template>
  <div class="creature-feature"
    :class="spellcasting ? 'spellcasting' : ''"
    v-html="featureHTML"></div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      required: true,
      validator: (f) => f.name && f.description,
    },
  },
  data() {
    return {
      spellcasting: null,
      featureHTML: null,
    };
  },
  created() {
    if (this.feature.description.includes('spellcasting')) { this.spellcasting = true; }
    let featureString = `***${this.feature.name}`;
    if (this.feature.uses) {
      featureString += ` (${this.feature.uses})`;
    }
    featureString += '.*** ';
    featureString += this.feature.description;
    this.featureHTML = this.markdownify(featureString);
  },
};
</script>

<style lang="scss">
.creature-feature {

  &:not(.spellcasting) {
    p:not(:first-child) {
      text-indent:1em;
    }
  }
}
</style>
