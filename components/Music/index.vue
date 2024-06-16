<template>
  <div v-if="currentUser">
    <v-row class="ma-2 pa-2">
      <v-col cols="12">
        <UserProfile :user="currentUser" />
      </v-col>
    </v-row>
    <v-row class="ma-2 pa-2" v-if="currentSong">
      <v-col cols="12">
        <PlayerDisplay :song="currentSong" :artists="currentArtist" />
        <PlayerControls @next="onNext" @prev="onPrev" />
      </v-col>
    </v-row>
    <v-row class="ma-2 pa-2">
      <v-col cols="3">
        <List :lists="lists" @update:listSelected="onUpdateListSelected" />
      </v-col>
      <v-col cols="9">
        <ListSongs
          :songs="songsByList"
          @update:songSelected="onUpdateSongSelected"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const listSelected = ref(null);
const songsByList = ref([]);
const currentSong = ref(null);
const currentArtist = ref(null);
const currentItemSong = ref(0);
const currentUser = ref(null);
const isLoaded = ref(false);

const props = defineProps({
  artists: {
    type: Array,
    default: [],
  },
  songs: {
    type: Array,
    default: [],
  },
  lists: {
    type: Array,
    default: [],
  },
  user: {
    type: Object,
    default: {},
  },
});

// const isPaused = ref(false);
// const isPlaying = ref(false);

const onUpdateListSelected = (list) => {
  listSelected.value = list;
  songsByList.value = listSelected.value.songs;
};

const onUpdateSongSelected = (data) => {
  currentSong.value = data.song;
  currentItemSong.value = data.i;
  currentArtist.value = currentSong.value.artists;
};

const onNext = () => {
  if (currentItemSong.value === listSelected.value.songs.length - 1)
    currentItemSong.value = 0;
  else currentItemSong.value = currentItemSong.value + 1;
};

const onPrev = () => {
  if (currentItemSong.value === 0)
    currentItemSong.value = listSelected.value.songs.length - 1;
  else currentItemSong.value = currentItemSong.value - 1;
};

watch(
  () => props.user,
  (refreshUser) => {
    if (refreshUser) {
      currentUser.value = refreshUser;
    }
  },
  { immediate: true }
);
</script>
