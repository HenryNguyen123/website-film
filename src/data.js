export const listDataHomePage = [
    {
        title: 'Đang chiếu',
        api: import.meta.env.VITE_DOMAIN_API+'movie/now_playing?api_key=' + import.meta.env.VITE_DOMAIN_key + '&language=' + import.meta.env.VITE_API_LANG + '&page=1'
    },
    {
        title: 'Ưa thích',
        api: import.meta.env.VITE_DOMAIN_API+'movie/popular?api_key=' + import.meta.env.VITE_DOMAIN_key + '&language=' + import.meta.env.VITE_API_LANG + '&page=1'
    },
    {
        title: 'Sắp chiếu',
        api: import.meta.env.VITE_DOMAIN_API+'movie/upcoming?api_key=' + import.meta.env.VITE_DOMAIN_key + '&language=' + import.meta.env.VITE_API_LANG + '&page=1'
    }
]


export const sliderData = [
    {
        img: 'http://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg',
        title: 'first slider',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
        img: 'http://image.tmdb.org/t/p/original/hd1TvTUGjkoYoqvXYfSBpI5Ri9B.jpg',
        title: 'second slider',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
        img: 'http://image.tmdb.org/t/p/original/fzkLKtZCkYSDzxoqntE5KgIqvzk.jpg',
        title: 'third slider',
        description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
]


const  linkMenu = 'https://api.themoviedb.org/3/genre/movie/list?api_key=e9e9d8da18ae29fc430845952232787c&language=vi-VN'