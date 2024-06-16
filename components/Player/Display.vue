<template>
  <v-card color="#000" v-if="song" class="mx-auto" variant="outlined">
    <v-container fluid>
      <v-row dense>
        <v-col>
          <div class="video-container">
            <iframe
              class="ma-2"
              width="677"
              height="315"
              :src="`https://www.youtube.com/embed/${song.url}}&autoplay=1`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            >
            </iframe>
          </div>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col>
          <v-card-title class="text-h5">
            {{ song.name }}
          </v-card-title>

          <v-card-subtitle v-for="artist in artists">
            {{
              `${artist.name1} ${artist.name2} ${artist.lastname1} ${artist.lastname2}`
            }}
          </v-card-subtitle>

          <v-card-text>
            <div class="text-body-1">Album: {{ song.album }}</div>
            <div class="text-body-1">Año: {{ song.year }}</div>
            <div class="text-body-1">Duracion: {{ song.duration }}</div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup>
const props = defineProps({
  song: {
    type: Object,
  },
  artists: {
    type: Object,
  },
});
</script>

<style scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
