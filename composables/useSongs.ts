// composables/useSongs.ts
import { ref } from "vue";

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

export const useSongs = () => {
  const songs = ref<Song[]>([]);
  const song = ref<Song>({
    _id: "",
    name: "",
    album: "",
    year: "",
    url: "",
    duration: "",
    picture: "",
    artists: [],
    lists: [],
  });

  const fetchSongs = async () => {
    try {
      const { data, error } = await $fetch(`/api/songs/findAll`);
      if (error && error.value) {
        console.error("Error fetching data:", error.value);
      } else if (data) {
        songs.value = data.value as Song[];
      } else {
        console.error("No data or error received from server");
      }
    } catch (error) {
      console.error("Error in fetchSongs function:", error);
    }
  };

  const fetchSong = async (id: string) => {
    const { data, error } = await $fetch(`/api/songs/find?id=${id}`);
    if (error.value) {
      console.error(error.value);
    } else {
      song.value = data.value as Song;
    }
  };

  const addSong = async (newSong: Song) => {
    const { data, error } = await $fetch(`/api/songs/create`, {
      method: "POST",
      body: JSON.stringify(newSong),
    });
    if (error.value) {
      console.error(error.value);
    } else {
      songs.value.push(data.value as Song);
    }
  };

  const updateSong = async (updatedSong: Song) => {
    const { data, error } = await $fetch(`/api/songs/update`, {
      method: "PUT",
      body: JSON.stringify(updatedSong),
    });
    if (error.value) {
      console.error(error.value);
    } else {
      songs.value = songs.value.map((s) =>
        s._id === updatedSong._id ? updatedSong : s
      );
    }
  };

  const deleteSong = async (id: string) => {
    const { error } = await $fetch(`/api/songs/delete?id=${id}`, {
      method: "DELETE",
    });
    if (error.value) {
      console.error(error.value);
    } else {
      songs.value = songs.value.filter((s) => s._id !== id);
    }
  };

  return {
    songs,
    song,
    fetchSongs,
    fetchSong,
    addSong,
    updateSong,
    deleteSong,
  };
};
