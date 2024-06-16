<template>
  <div>
    <Music :artists="useArtist.getArtists" :user="user" :lists="lists" />
  </div>
</template>
<script setup>
import { useArtistStore } from "~/store/artist";
import { useUserStore } from "~/store/user";
import { useListStore } from "~/store/list";

const useArtist = useArtistStore();
const useUser = useUserStore();
const useList = useListStore();

const user = ref(null);
const lists = ref([]);
const userId = ref("666869ecf6bc70ebdf49223c");

const getUserById = async (id) => {
  await useUser.fetchUser(id);
  user.value = await useUser.getUser;
};

const getLists = async (userId) => {
  await useList.fetchListByUser(userId);
  lists.value = await useList.getLists;
};

onMounted(async () => {
  await getUserById(userId.value);
  await getLists(userId.value);
});
</script>
