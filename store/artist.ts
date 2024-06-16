// stores/artist.js
import { defineStore } from "pinia";
import { useArtists } from "~/composables/useArtists";

interface Artist {
  _id: string;
  name1: string;
  name2: string;
  lastname1: string;
  lastname2: string;
  songs: object[];
}

export const useArtistStore = defineStore({
  id: "artist",
  state: () => ({
    artist: null as Artist | null,
    artists: [] as Artist[],
  }),
  persist: {
    // Configuración de persistencia
    // Puedes especificar el almacenamiento y opciones de serialización aquí
    // storage: persistedState.localStorage,
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
    },
  },
  getters: {
    getArtist(): Artist | null {
      return this.artist;
    },
    getArtists(): Artist[] {
      return this.artists;
    },
  },
  actions: {
    setArtist(artist: Artist) {
      this.artist = artist;
    },
    async fetchArtists() {
      const { artists, fetchArtists } = await useArtists();
      await fetchArtists();
      this.artists = artists.value;
    },
    async fetchArtist(id: string) {
      const { artist, fetchArtist } = useArtists();
      await fetchArtist(id);
      this.artist = artist.value;
    },
    async addArtist(artist: Artist) {
      const { artists, addArtist } = useArtists();
      await addArtist(artist);
      this.artists = artists.value;
    },
    async updateArtist(artist: Artist) {
      const { artists, updateArtist } = useArtists();
      await updateArtist(artist);
      this.artists = artists.value;
    },
    async deleteArtist(id: string) {
      const { artists, deleteArtist } = useArtists();
      await deleteArtist(id);
      this.artists = artists.value;
    },
  },
});
