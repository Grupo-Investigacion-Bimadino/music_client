<template>
    <v-card class="mx-auto" variant="outlined">
      <v-list density="compact">
        <v-list-subheader>Listas de reproducción</v-list-subheader>
  
        <v-list-item
            v-model="listSelected"
            v-for="(item, i) in lists"
            :key="i"
            :title="item.name"
            :value="item"
            color="primary"
            @click="$emit('update:listSelected', item)"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-music"></v-icon>
          </template>
  
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
<script setup>

const listSelected = ref(null);

const props = defineProps(
        { 
            lists:{
                type: Array                
            }
        }
    )
</script>