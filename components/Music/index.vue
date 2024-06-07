<template>
    <div>
        <v-row>
            <v-col cols="12">
                <PlayerDisplay />
                <PlayerControls />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6" >
                <List />            
            </v-col>
            <v-col cols="6">
                <ListSongs />
            </v-col>
        </v-row>
    </div>
</template>
<script setup>    
    
    const props = defineProps(
        { 
            artists:{
                type: Array                
            }, 
            songs:{
                type: Array                
            }, 
            lists:{
                type: Array                
            }, 
            user:{
                type: Object                
            }
        }
    )
    const isPaused = ref(false);
    const isPlaying = ref(false);
    
    const onPlay = () => {
        isPlaying.value = true;
        isPaused.value = false;
    }
    
    const onPause = () => {
        isPlaying.value = false;
        isPaused.value = true;
    }

    const currentSong = ref(null);
    const currentArtist = ref(null);
    const currentList = ref(null);
    const currentUser = ref(null);
    
</script>