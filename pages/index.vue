<template>    
    <Music :artists="artists" :songs="songs" :lists="lists" :user="user"/>
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
            url: 'fJ9rUzIMcZQ?si=HxbbFpimMXc8NUi1',
            duration: '5:55',
            artists: [1]
        },
        {
            _id: 2,
            name: 'Somebody to Love',
            album: 'A Day at the Races',
            year: '1976',
            url: 'kijpcUv-b8M?si=lbgJ_JlRXQQ9JEP0',
            duration: '4:56',
            artists: [1]
        },
        {
            _id: 3,
            name: 'Rocket Man',
            album: 'Honky Château',
            year: '1972',
            url: 'DtVBCG6ThDk?si=6eFJpkH_JQT-7Uvc',
            duration: '4:41',
            artists: [2]
        },
        {
            _id: 4,
            name: 'Tiny Dancer',
            album: 'Madman Across the Water',
            year: '1971',
            url: 'yYcyacLRPNs?si=TysdRUDzA19Yashe',
            duration: '6:15',
            artists: [2]
        },
        {
            _id: 5,
            name: 'Hello',
            album: '25',
            year: '2015',
            url: 'YQHsXMglC9A?si=y9IZBbesRUfbD7pE',
            duration: '6:07',
            artists: [3]
        },
        {
            _id: 6,
            name: 'Rolling in the Deep',
            album: '21',
            year: '2010',
            url: 'rYEDA3JcQqw?si=1TLyGonM1qVdE3C8',
            duration: '3:54',
            artists: [3]
        },
        {
            _id: 7,
            name: 'Shake It Off',
            album: '1989',
            year: '2014',
            url: 'nfWlot6h_JM?si=omXUiab6L7kGtSS8',
            duration: '4:02',
            artists: [4]
        },
        {
            _id: 8,
            name: 'Love Story',
            album: 'Fearless',
            year: '2008',
            url: '8xg3vE8Ie_E?si=yJ3hsYyGyk5MAN-Y',
            duration: '3:55',
            artists: [4]
        },
        {
            _id: 9,
            name: 'Shape of You',
            album: '÷',
            year: '2017',
            url: 'JGwWNGJdvx8?si=v6CtcGNntJubh2hY',
            duration: '4:24',
            artists: [5]
        },
        {
            _id: 10,
            name: 'Perfect',
            album: '÷',
            year: '2017',
            url: '2Vv-BfVoq4g?si=LBnU34P0ermjRLmL',
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
        },
        {
            _id: 2,
            name: '90s',
            description: '90s music',
            gender: 'Pop',
            songs: [4, 5, 6],
            user: 1
        },
        {
            _id: 3,
            name: '00s',
            description: '00s music',
            gender: 'Pop',
            songs: [7, 8, 9],
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

