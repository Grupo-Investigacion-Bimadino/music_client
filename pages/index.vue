<template>    
    <Music :artists="artists"  :songs="songs" :lists="lists" :user="user"/>
</template>
<script setup>
    const artists = ref([
        {
            _id: 1,
            name1: 'Freddie',
            name2: '',
            lastname1: 'Mercury',
            lastname2: '',
            songs: [1, 2]
        },
        {
            _id: 2,
            name1: 'Elton',
            name2: '',
            lastname1: 'John',
            lastname2: '',
            songs: [3, 4]
        },
        {
            _id: 3,
            name1: 'Adele',
            name2: '',
            lastname1: '',
            lastname2: '',
            songs: [5, 6]
        },
        {
            _id: 4,
            name1: 'Taylor',
            name2: '',
            lastname1: 'Swift',
            lastname2: '',
            songs: [7, 8]
        },
        {
            _id: 5,
            name1: 'Ed',
            name2: '',
            lastname1: 'Sheeran',
            lastname2: '',
            songs: [9, 10]
        }
    ]);

    const songs = ref([
        {
            _id: 1,
            name: 'Bohemian Rhapsody',
            album: 'A Night at the Opera',
            year: '1975',
            url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
            duration: '5:55',
            artists: [1]
        },
        {
            _id: 2,
            name: 'Somebody to Love',
            album: 'A Day at the Races',
            year: '1976',
            url: 'https://www.youtube.com/watch?v=kijpcUv-b8M',
            duration: '4:56',
            artists: [1]
        },
        {
            _id: 3,
            name: 'Rocket Man',
            album: 'Honky Château',
            year: '1972',
            url: 'https://www.youtube.com/watch?v=DtVBCG6ThDk',
            duration: '4:41',
            artists: [2]
        },
        {
            _id: 4,
            name: 'Tiny Dancer',
            album: 'Madman Across the Water',
            year: '1971',
            url: 'https://www.youtube.com/watch?v=yYcyacLRPNs',
            duration: '6:15',
            artists: [2]
        },
        {
            _id: 5,
            name: 'Hello',
            album: '25',
            year: '2015',
            url: 'https://www.youtube.com/watch?v=YQHsXMglC9A',
            duration: '6:07',
            artists: [3]
        },
        {
            _id: 6,
            name: 'Rolling in the Deep',
            album: '21',
            year: '2010',
            url: 'https://www.youtube.com/watch?v=rYEDA3JcQqw',
            duration: '3:54',
            artists: [3]
        },
        {
            _id: 7,
            name: 'Shake It Off',
            album: '1989',
            year: '2014',
            url: 'https://www.youtube.com/watch?v=nfWlot6h_JM',
            duration: '4:02',
            artists: [4]
        },
        {
            _id: 8,
            name: 'Love Story',
            album: 'Fearless',
            year: '2008',
            url: 'https://www.youtube.com/watch?v=8xg3vE8Ie_E',
            duration: '3:55',
            artists: [4]
        },
        {
            _id: 9,
            name: 'Shape of You',
            album: '÷',
            year: '2017',
            url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
            duration: '4:24',
            artists: [5]
        },
        {
            _id: 10,
            name: 'Perfect',
            album: '÷',
            year: '2017',
            url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
            duration: '4:40',
            artists: [5]
        }
    ]);

    const lists = ref([
        {
            _id: 1,
            name: '80s',
            description: '80s music',
            gender: 'Rock',
            songs: [1, 2, 3],
            user: 1
        }
    ])

    const user = ref(
        {
            _id:1,
            nickname:'@jhonsmith',
            password:'1234567',
            picture: 'https://cdn.vuetifyjs.com/images/john.png',
            lists:[1]
        }
    )
</script>