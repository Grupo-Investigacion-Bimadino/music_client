<template>
  <div>
    Hi
    <!--h1>Artists</h1>
    <ul>
      <li v-for="artist in artists" :key="artist._id">
        {{ artist.name }}
        <button @click="selectArtist(artist)">Edit</button>
        <button @click="removeArtist(artist._id)">Delete</button>
      </li>
    </ul>
    <form @submit.prevent="saveArtist">
      <input v-model="artistForm.name" placeholder="Name" />
      <textarea
        v-model="artistForm.description"
        placeholder="Description"
      ></textarea>
      <input v-model="artistForm.picture" placeholder="Picture URL" />
      <button type="submit">Save</button>
    </form-->
  </div>
</template>

<script setup>
/*
import { ref, onMounted } from "vue";
import { useArtistStore } from "@/stores/artist";

const store = useArtistStore();
const artistForm = ref({ _id: null, name: "", description: "", picture: "" });

onMounted(() => {
  store.fetchArtists();
});

const saveArtist = () => {
  if (artistForm.value._id) {
    store.updateArtist(artistForm.value);
  } else {
    store.addArtist(artistForm.value);
  }
  artistForm.value = { _id: null, name: "", description: "", picture: "" };
};

const selectArtist = (artist) => {
  artistForm.value = { ...artist };
};

const removeArtist = (id) => {
  store.deleteArtist(id);
};*/
</script>
