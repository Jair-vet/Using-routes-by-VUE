<template>
   <a v-if="isExternalLink" 
    target="_blank"
    class="normal-link"
    :href="link.to">{{ link.name }}</a>

    <router-link
        v-else
        :to=" route "
        v-slot="{ isActive }"
    >
        <a :class=" isActive ? 'is-active' : 'normal-link' " >
            {{ link.name }}
        </a>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        isExternalLink() {
            return this.link.to.startsWith('http')
        },
        route() {
            return this.link.id === undefined
                ? { name: this.link.to }
                : { name: this.link.to, params: { id: this.link.id } }
        }
    }
}
</script>

<style scoped>
.is-active {
    color: #fff;
    text-decoration: none;
    background-color: #42b983;
    padding: .3rem;
    border-radius: .5rem;
    width: 15rem;
    height: 5rem;
    text-align: center;
    font-weight:900;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}

.normal-link {
    color: #fff;
    text-decoration: none;
    background-color: #268888;
    padding: .3rem;
    border-radius: .5rem;
    width: 15rem;
    height: 5rem;
    text-align: center;
    font-weight:900;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}

@media (max-width: 768px) {  
    .normal-link, .is-active{
        flex-direction: column;
        margin-top: 1rem;
    }
}

</style>