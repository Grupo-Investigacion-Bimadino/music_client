<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-music-box-multiple"
          variant="outlined"
          text="Nueva lista"
          size="small"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        prepend-icon="mdi-music-box-multiple"
        title="Nueva lista de reproducción"
      >
        <v-card-text>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="newList.name"
                label="Nombre*"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="newList.description"
                label="Descripción"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="newList.genre"
                label="Género"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Cancelar"
            variant="plain"
            @click="cancelCreateList"
          ></v-btn>

          <v-btn
            color="primary"
            text="Guardar"
            variant="tonal"
            @click="addNewList"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
const emit = defineEmits(["newList"]);
const dialog = ref(false);

const newList = reactive({
  name: "",
  description: "",
  genre: "",
});

const addNewList = () => {
  emit("newList", newList);
  newList.name = "";
  newList.description = "";
  newList.genre = "";
  dialog.value = true;
};

const cancelCreateList = () => {
  dialog.value = false;
  newList.name = "";
  newList.description = "";
  newList.genre = "";
};
</script>
