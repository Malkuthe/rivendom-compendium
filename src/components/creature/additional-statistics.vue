<template>
  <creature-statbox label-width="35%" top-margin="0.5em">
    <div class="entry saves" v-if="saves">
      <div class="label saves-label">Saving Throws</div>
      <div class="value creature-saves">{{saves}}</div>
    </div>
    <div class="entry skills" v-if="skills">
      <div class="label skills-label">Skills</div>
      <div class="value creature-skills">{{skills}}</div>
    </div>
    <div class="entry damage-immunities" v-if="creature.damage && creature.damage.immunities">
      <div class="label dImmunities-label">Damage Immunities</div>
      <div class="value creature-dImmunities">{{creature.damage.immunities}}</div>
    </div>
    <div class="entry damage-resistances" v-if="creature.damage && creature.damage.resistances">
      <div class="label dResistances-label">Damage Resistances</div>
      <div class="value creature-dResistances">{{creature.damage.resistances}}</div>
    </div>
    <div class="entry damage-vulnerabilities"
      v-if="creature.damage && creature.damage.vulnerabilities">
      <div class="label dVulnerabilities-label">Damage Vulnerabilities</div>
      <div class="value creature-dVulnerabilities">
        {{creature.damage.vulnerabilities}}
      </div>
    </div>
    <div class="entry condition-immunities"
      v-if="creature.condition && creature.condition.immunities">
      <div class="label cImmunities-label">Condition Immunities</div>
      <div class="value creature-cImmunities">{{creature.condition.immunities}}</div>
    </div>
    <div class="entry languages">
      <div class="label languages-label">Languages</div>
      <div class="value creature-languages">{{creature.languages ?? '—'}}</div>
    </div>
    <div class="entry senses" v-if="creature.senses">
      <div class="label senses-label">Senses</div>
      <div class="value creature-senses">{{creature.senses}}</div>
    </div>
  </creature-statbox>
</template>

<script>
import statbox from '@/components/creature/statbox.vue';

export default {
  props: ['creature'],
  components: { 'creature-statbox': statbox },
  data() {
    return {
      saves: null,
      senses: null,
    };
  },
  created() {
    if (this.creature) {
      if (this.creature.saves) {
        const saves = Object.entries(this.creature.saves);
        let saveString = '';
        for (let i = 0; i < saves.length; i += 1) {
          saveString += `${saves[i][0]} ${saves[i][1] >= 0 ? '+' : ''}${saves[i][1]}`;
          if (i < saves.length - 1) { saveString += ', '; }
        }
        this.saves = saveString;
      }

      if (this.creature.skills) {
        const skills = Object.entries(this.creature.skills);
        let skillString = '';
        for (let i = 0; i < skills.length; i += 1) {
          skillString += `${skills[i][0]} ${skills[i][1] >= 0 ? '+' : ''}${skills[i][1]}`;
          if (i < skills.length - 1) { skillString += ', '; }
        }
        this.skills = skillString;
      }
    }
  },
};
</script>
