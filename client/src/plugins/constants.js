import crxptable from '../constants/cr-xp-table';
import abilityOrder from '../constants/ability-order';

export default {
  install: (app) => {
    app.provide('crxptable', crxptable);
    app.provide('abilityOrder', abilityOrder);
  },
};
