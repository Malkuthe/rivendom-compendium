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
  inject: ['abilityOrder'],
  data() {
    return {
      saves: null,
      senses: null,
    };
  },
  created() {
    if (this.creature) {
      if (this.creature.saves) {
        const saves = Object.keys(this.creature.saves)
          .sort((a, b) => this.abilityOrder.indexOf(a.toLowerCase())
            - this.abilityOrder.indexOf(b.toLowerCase()));
        let saveString = '';
        saves.forEach((save, index) => {
          const value = this.creature.saves[save];
          saveString += `${save} ${value >= 0 ? '+' : ''}${value}`;
          if (index < saves.length - 1) { saveString += ', '; }
        });
        this.saves = saveString;
      }

      if (this.creature.skills) {
        const skills = Object.keys(this.creature.skills).sort();
        let skillString = '';
        skills.forEach((skill, index) => {
          const value = this.creature.skills[skill];
          skillString += `${skill} ${value >= 0 ? '+' : ''}${value}`;
          if (index < skills.length - 1) { skillString += ', '; }
        });
        this.skills = skillString;
      }
    }
  },
};
</script>
