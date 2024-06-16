// stores/list.js
import { defineStore } from "pinia";
import { useLists } from "~/composables/useLists";

interface List {
  _id: string;
  name: string;
  description: string;
  picture: string;
  gender: string;
  user: object[];
  songs: object[];
}

export const useListStore = defineStore({
  id: "list",
  state: () => ({
    list: null as List | null,
    lists: [] as List[],
  }),
  persist: {
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
    },
  },
  getters: {
    getList(): List | null {
      return this.list;
    },
    getLists(): List[] {
      return this.lists;
    },
  },
  actions: {
    setList(list: List) {
      this.list = list;
    },
    async fetchLists() {
      const { lists, fetchLists } = await useLists();
      await fetchLists();
      this.lists = lists.value;
    },
    async fetchList(id: string) {
      const { list, fetchList } = useLists();
      await fetchList(id);
      this.list = list.value;
    },
    async fetchListByUser(userId: string) {
      const { lists, fetchListByUser } = useLists();
      await fetchListByUser(userId);
      this.lists = lists.value;
    },
    async addList(list: List) {
      const { lists, addList } = useLists();
      await addList(list);
      this.lists = lists.value;
    },
    async updateList(list: List) {
      const { lists, updateList } = useLists();
      await updateList(list);
      this.lists = lists.value;
    },
  },
});
