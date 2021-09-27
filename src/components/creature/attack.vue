<template>
  <div class="creature-attack" v-html="attackHTML"></div>
</template>

<script>
export default {
  props: ['attack'],
  data() {
    return {
      attackHTML: null,
    };
  },
  created() {
    let attackString = `***${this.attack.name}`;
    if (this.attack.uses) { this.attackString += `(${this.attack.uses})`; }
    attackString += `.** ${this.attack.type}:* `;
    attackString += `${this.attack.tohit >= 0 ? '+' : ''}${this.attack.tohit} to hit, `;
    if (this.attack.reach && this.attack.range) {
      attackString += `reach ${this.attack.reach} or range ${this.attack.range}, `;
    } else if (this.attack.reach) {
      attackString += `reach ${this.attack.reach}, `;
    } else if (this.attack.range) {
      attackString += `range ${this.attack.range}, `;
    }
    const damageParts = this.attack.damage.split(' plus ');
    damageParts.forEach((item, index, arr) => { arr[index] = `<span>${item}</span>`; });
    attackString += `${this.attack.target}. *Hit:* ${damageParts.join(' plus ')}.`;
    if (this.attack.onhit) { attackString += ` ${this.attack.onhit}`; }
    this.attackHTML = this.markdownify(attackString);
  },
};
</script>

<style lang="scss">
.creature-attack {
  span {
    white-space: nowrap;
  }

  &:not(.spellcasting) {
    p:not(:first-child) {
      text-indent:1em;
    }
  }
}
</style>
