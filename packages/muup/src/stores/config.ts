import type { User } from "../types/user.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfigStore = defineStore("config", () => {
  const user = ref<User | null>(null);
  const setUser = (newUser: User | null) => {
    user.value = newUser;
  };

  return { user, setUser };
});

