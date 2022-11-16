// Importaciones cuando la app es montada
// import AboutPage from '../modules/pokemon/pages/AboutPage'
// import ListPage from '../modules/pokemon/pages/ListPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'
// import NoPageFound from '../modules/shared/pages/NoPageFound'
import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

// Importacion Lazy
const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },

    // Pokemon
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import( /* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home', 
                component: () => import( /* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
            }, 
            { 
                path: 'about', 
                name: 'pokemon-about', 
                component: () => import( /* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import( /* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number( route.params.id )
                    return isNaN( (id) ) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },

    // Dragon Ball Z
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import( /* webpackChunkName: "DragonBallLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            { 
                path: 'characters', 
                name: 'dbz-characters', 
                component: () => import( /* webpackChunkName: "Characters" */ '@/modules/dbz/pages/Characters')
            },
        
            { 
                path: 'about', 
                name: 'dbz-about', 
                component: () => import( /* webpackChunkName: "AboutPage" */ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },
    { 
        path: '/:pathMatch(.*)*',   // Cualquier URL que no haga Match
        component: () => import( /* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    },  
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

// Guard Global - Síncrono
// router.beforeEach((to, from, next) => {
//     console.log({ to, from, next });
// 
//     const random = Math.random() * 100
//     if( random > 50 ){
//         console.log('Autenticado');
//         next()
//     }else {
//         console.log(random, 'Bloqueado no puedes Acceder');
//         next({ name: 'pokemon-home' })
//     }
// 
// 
// })

// Guard Global - Asincrono
// const canAccess = () => {
//     return new Promise( resolve => {
// 
//         const random = Math.random() * 100
//         if( random > 50 ){
//             console.log('Autenticado');
//             resolve(true)
//         }else {
//             console.log(random, 'Bloqueado no puedes Acceder');
//             resolve(false)
//         }
//     })
// }
// router.beforeEach( async(to, from, next) => {
//     const authorized = await canAccess()
//     authorized 
//         ? next()
//         : next({ name: 'pokemon-home' })
// })

export default router