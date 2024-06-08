<template>
    <div>
        <v-row class="ma-2">
            <v-col class="text-left">
                <v-btn icon="mdi-skip-previous" @click="prev"></v-btn>
            </v-col>
            <v-col class="text-right">
                <v-btn icon="mdi-skip-next" @click="next"></v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>

const emit = defineEmits(['prev', 'next']);

const prev = () => {    
    emit('prev');
};

const next = () => {    
    emit('next');
};

</script>
