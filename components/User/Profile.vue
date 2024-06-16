<template>
  <v-card theme="dark">
    <v-card-text>
      <v-row class="spacer" no-gutters>
        <v-col cols="4" md="1" sm="2">
          <v-avatar>
            <v-img alt="Avatar" :src="`images/${currentUser.picture}`"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="text-left">
          <v-icon>mdi-music-circle</v-icon>
          <span class="text-grey"> Lista de reproduccion de </span>
          <strong v-html="currentUser.nickname"></strong>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script setup>
const props = defineProps({
  user: {
    type: Object,
  },
});

const currentUser = ref(null);

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
