import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  counter: 0
});

export const getters = {
  getField
};

export const mutations = {
  updateField,
  increment(state) {
    state.counter++;
  }
};
