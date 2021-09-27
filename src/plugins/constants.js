import crxptable from '../constants/cr-xp-table';

export default {
  install: (app) => {
    app.provide('crxptable', crxptable);
  },
};
