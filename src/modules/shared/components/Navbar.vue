<template>

    <div>
        <!-- <router-link class="navbar" :to="{ name: 'home' }">Pokemon List</router-link>
        <router-link class="navbar" :to="{ name: 'pokemon-id', params: { id: 85 } }">Pokemon por ID</router-link>
        <router-link class="navbar" :to="{ name: 'about' }">About</router-link> -->
        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>


</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {

    data() {
        return {
            links: [ 
                { to: 'pokemon-home', name: 'Pokenmons' },
                { to: 'pokemon-id', name: 'Por ID', id: 151 },
                { to: 'pokemon-about', name: 'About' },
                
                { to: 'dbz-characters', name: 'Personajes' },
                { to: 'dbz-about', name: 'DBZ-About' },

                { to: 'https://google.com', name: 'Google' },
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent( () =>  import('./CustomLink.vue'))
    }
}
</script>

<style scoped>

div {
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

div a {
    font-weight: bold;
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    display: inline-block;
}

.navbar {
    background-color: #268888;
    padding: .3rem;
    margin: 1rem 1rem;
    border-radius: .5rem;
    width: 20rem;
    height: 5rem;
    text-align: center;
    font-weight:900;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}

/* div .router-link-exact-active {
    background-color: #42b983;
} */


@media (max-width: 768px) {  
    div {
        flex-direction: column;
    }
}

</style>