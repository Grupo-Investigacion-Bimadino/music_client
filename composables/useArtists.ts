// composables/useArtists.ts
import { ref } from "vue";

interface Artist {
  _id: string;
  name1: string;
  name2: string;
  lastname1: string;
  lastname2: string;
  songs: object[];
}

export const useArtists = () => {
  const artists = ref<Artist[]>([]);
  const artist = ref<Artist>({
    _id: "",
    name1: "",
    name2: "",
    lastname1: "",
    lastname2: "",
    songs: [],
  });

  const fetchArtists = async () => {
    try {
      const { data, error } = await $fetch(`/api/artists/findAll`);
      if (error && error.value) {
        console.error("Error fetching data:", error.value);
      } else if (data) {
        artists.value = data.value as Artist[];
      } else {
        console.error("No data or error received from server");
      }
    } catch (error) {
      console.error("Error in fetchArtists function:", error);
    }
  };

  const fetchArtist = async (id: string) => {
    const { data, error } = await $fetch(`/api/artists/find?id=${id}`);
    if (error.value) {
      console.error(error.value);
    } else {
      artist.value = data.value as Artist;
    }
  };

  const addArtist = async (newArtist: Artist) => {
    const { data, error } = await $fetch(`/api/artists/create`, {
      method: "POST",
      body: JSON.stringify(newArtist),
    });
    if (error.value) {
      console.error(error.value);
    } else {
      artists.value.push(data.value as Artist);
    }
  };

  const updateArtist = async (updatedArtist: Artist) => {
    const { data, error } = await $fetch(`/api/artists/update`, {
      method: "PUT",
      body: JSON.stringify(updatedArtist),
    });
    if (error.value) {
      console.error(error.value);
    } else {
      const index = artists.value.findIndex((a) => a._id === updatedArtist._id);
      if (index !== -1) {
        artists.value[index] = data.value as Artist;
      }
    }
  };

  const deleteArtist = async (id: string) => {
    const { error } = await $fetch(`/api/artists/delete?id=${id}`, {
      method: "DELETE",
    });
    if (error.value) {
      console.error(error.value);
    } else {
      artists.value = artists.value.filter((a) => a._id !== id);
    }
  };

  return {
    artists,
    artist,
    fetchArtists,
    fetchArtist,
    addArtist,
    updateArtist,
    deleteArtist,
  };
};
