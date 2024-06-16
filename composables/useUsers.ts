// composables/useUsers.ts
import { ref } from "vue";

interface User {
  _id: string;
  nickname: string;
  email: string;
  description: string;
  picture: string;
}

export const useUsers = () => {
  const users = ref<User[]>([]);
  const user = ref<User>({
    _id: "",
    nickname: "",
    email: "",
    description: "",
    picture: "",
  });

  const fetchUsers = async () => {
    try {
      const data = await $fetch<User[]>(`/api/users/findAll`);
      users.value = data;
    } catch (error) {
      console.error("Error in fetchUsers function:", error);
    }
  };

  const fetchUser = async (id: string) => {
    try {
      const data = await $fetch<User>(`/api/users/find?id=${id}`);
      user.value = data;
    } catch (error) {
      console.error("Error in fetchUser function:", error);
    }
  };

  const addUser = async (newUser: User) => {
    try {
      const data = await $fetch<User>(`/api/users/create`, {
        method: "POST",
        body: JSON.stringify(newUser),
      });

      users.value.push(data);
    } catch (error) {
      console.error("Error in addUser function:", error);
    }
  };

  const updateUser = async (id: string, updatedUser: User) => {
    try {
      const data = await $fetch<User>(`/api/users/update?id=${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
      });

      users.value = users.value.map((u) =>
        u._id === data._id ? updatedUser : u
      );
    } catch (error) {
      console.error("Error in updateUser function:", error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await $fetch<User>(`/api/users/delete?id=${id}`, {
        method: "DELETE",
      });

      users.value = users.value.filter((u) => u._id !== id);
    } catch (error) {
      console.error("Error in deleteUser function:", error);
    }
  };

  return {
    users,
    user,
    fetchUsers,
    fetchUser,
    addUser,
    updateUser,
    deleteUser,
  };
};
