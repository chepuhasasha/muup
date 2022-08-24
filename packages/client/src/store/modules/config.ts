import { Module } from "vuex";
import { State } from "../index";

export interface IConfigState {
  id: string;
}

export const config: Module<IConfigState, State> = {
  state: {
    id: "123",
  },
  getters: {
    ID: (state) => state.id,
  },
  mutations: {},
  actions: {},
};
