<template>
    <v-card class="mx-auto" variant="outlined">
      <v-list density="compact">
        <v-list-subheader>Canciones disponibles</v-list-subheader>
  
        <v-list-item            
            v-for="(song, i) in songs"
            :key="i"
            :title="song.name"
            :value="song"
            color="primary"
            @click="$emit('update:songSelected', {song, i})"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-playlist-music"></v-icon>
          </template>
  
          <v-list-item-title v-text="song.text"></v-list-item-title>
        </v-list-item>
      </v-list>      
    </v-card>    
</template>
<script setup>
const props = defineProps(
        { 
            songs:{
                type: Array                
            }
        }
    )
</script>