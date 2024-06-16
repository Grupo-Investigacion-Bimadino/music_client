// stores/users.js
import { defineStore } from "pinia";
import { useUsers } from "~/composables/useUsers";

interface User {
  _id: string;
  nickname: string;
  email: string;
  description: string;
  picture: string;
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: null as User | null,
    users: [] as User[],
  }),
  persist: {
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
    },
  },
  getters: {
    getUser(): User | null {
      return this.user;
    },
    getUsers(): User[] {
      return this.users;
    },
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    async fetchUsers() {
      const { users, fetchUsers } = await useUsers();
      await fetchUsers();
      this.users = users.value;
    },
    async fetchUser(id: string) {
      const { user, fetchUser } = useUsers();
      await fetchUser(id);
      this.user = user.value;
    },
    async addUser(user: User) {
      const { users, addUser } = useUsers();
      await addUser(user);
      this.users = users.value;
    },
  },
});
