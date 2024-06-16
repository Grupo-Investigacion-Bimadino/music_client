// stores/song.js
import { defineStore } from "pinia";
import { useSongs } from "~/composables/useSongs";

interface Song {
  _id: string;
  name: string;
  album: string;
  year: string;
  url: string;
  duration: string;
  picture: string;
  artists: string[];
  lists: string[];
}

export const useSongStore = defineStore({
  id: "song",
  state: () => ({
    song: null as Song | null,
    songs: [] as Song[],
  }),
  persist: {
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
    },
  },
  getters: {
    getSong(): Song | null {
      return this.song;
    },
    getSongs(): Song[] {
      return this.songs;
    },
  },
  actions: {
    setSong(song: Song) {
      this.song = song;
    },
    async fetchSongs() {
      const { songs, fetchSongs } = await useSongs();
      await fetchSongs();
      this.songs = songs.value;
    },
    async fetchSong(id: string) {
      const { song, fetchSong } = useSongs();
      await fetchSong(id);
      this.song = song.value;
    },
    async addSong(song: Song) {
      const { songs, addSong } = useSongs();
      await addSong(song);
      this.songs = songs.value;
    },
    async updateSong(song: Song) {
      const { songs, updateSong } = useSongs();
      await updateSong(song);
      this.songs = songs.value;
    },
  },
});
