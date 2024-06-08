<template>
    <v-card color="#000" v-if="song" class="mx-auto" variant="outlined">
        <div class="d-flex flex-no-wrap">               
            <iframe 
                class="ma-2"                
                width="560" 
                height="315" 
                :src="`https://www.youtube.com/embed/${song.url}}&autoplay=1`" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen                
                >
            </iframe>
            
            <div>
                <v-card-title class="text-h5">
                    {{song.name}}
                </v-card-title>

                <v-card-subtitle>
                    {{ autorName }}
                </v-card-subtitle>

                <v-card-text>                                        
                    <div class="text-body-1">Album: {{ song.album }}</div>
                    <div class="text-body-1">Año: {{ song.year }}</div>
                    <div class="text-body-1">Duracion: {{ song.duration }}</div>
                </v-card-text>
            </div>
        </div>        
    </v-card>    
</template>
<script setup>
    const props = defineProps(
        {
            song:{
                type: Object
            },
            artist:{
                type: Object
            },            
        }
    )
    
    const autorName = computed(() => {
        return `${props.artist.name1} ${props.artist.lastname1} ${props.artist.lastname2}`
    })
</script>