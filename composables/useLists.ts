// composables/useLists.ts
import { ref } from "vue";

interface List {
  _id: string;
  name: string;
  description: string;
  picture: string;
  gender: string;
  user: object[];
  songs: object[];
}

export const useLists = () => {
  const lists = ref<List[]>([]);
  const list = ref<List>({
    _id: "",
    name: "",
    description: "",
    picture: "",
    gender: "",
    user: [],
    songs: [],
  });

  const fetchLists = async () => {
    try {
      const data = await $fetch<List[]>(`/api/lists/findAll`);
      lists.value = data;
    } catch (error) {
      console.error("Error in fetchLists function:", error);
    }
  };

  const fetchList = async (id: string) => {
    try {
      const data = await $fetch<List>(`/api/lists/find?id=${id}`);
    } catch (error) {
      console.error("Error in fetchList function:", error);
    }
  };

  const fetchListByUser = async (userId: string) => {
    try {
      const data = await $fetch<List[]>(
        `/api/lists/findByUser?userId=${userId}`
      );
      http: lists.value = data;
    } catch (error) {
      console.error("Error in fetchListByUser function:", error);
    }
  };

  const addList = async (newList: List) => {
    try {
      const data = await $fetch<List>(`/api/lists/create`, {
        method: "POST",
        body: JSON.stringify(newList),
      });
      lists.value.push(data);
    } catch (error) {
      console.error("Error in addList function:", error);
    }
  };

  const updateList = async (updatedList: List) => {
    try {
      const data = await $fetch<List>(`/api/lists/update`, {
        method: "PUT",
        body: JSON.stringify(updatedList),
      });
      lists.value = lists.value.map((l) =>
        l._id === data._id ? updatedList : l
      );
    } catch (error) {
      console.error("Error in updateList function:", error);
    }
  };

  const deleteList = async (id: string) => {
    try {
      await $fetch<List>(`/api/lists/delete?id=${id}`, {
        method: "DELETE",
      });
      lists.value = lists.value.filter((l) => l._id !== id);
    } catch (error) {
      console.error("Error in deleteList function:", error);
    }
  };

  return {
    lists,
    list,
    fetchLists,
    fetchList,
    addList,
    updateList,
    deleteList,
    fetchListByUser,
  };
};
