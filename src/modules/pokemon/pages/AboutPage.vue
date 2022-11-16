<template>
    <h1> About Page </h1>
    <h2> {{ name }} </h2>
    <div class="btn">
        <button @click="onChangeName" class="btn btn-verde">Cambiar Nombre</button>
    </div>
    <hr>
    <footer>
        <h4>© 2022 - Todos los Derechos Reservados</h4>
        <h5>Aceves Garcia Carlos Jair</h5>
    </footer>
</template>

<!-- Ciclos de Vida Options API -->
<script>
    export default {

        data() {
            return {
                name: 'Jair'
            }
        },
        methods: {
            onChangeName() {
                this.name = 'Laura'
            }
        },

        // beforeCreate() { 
        //     console.log('beforeCreate');
        // },
        created() { 
            this.name = 'Mario'
            // console.log('created');
            // Realizar Peticiones HTTP
        },
        // beforeMount() { 
        //     console.log('beforeMount');
        // },
        // mounted() { 
        //     console.log('mounted');
        //  },
        // beforeUpdate() { 
        //     console.log('beforeUpdate');
        //  },
        // updated() { 
        //     console.log('updated');
        //  },
        // activated() { 
        //     console.log('activated');
        //  },
        // deactivated() { 
        //     console.log('deactivated');
        //  },
        // beforeUnmount() { 
        //     console.log('beforeUnmount');
        //  },
        // unmounted() { 
        //     console.log('unmounted');
        //  },
        // errorCaptured() { 
        //     console.log('errorCaptured');
        //  },
        // renderTracked() { 
        //     console.log('renderTracked');
        //  },
        // renderTriggered() { 
        //     console.log('renderTriggered');
        //  },
    }
</script>

<style scoped>
.btn {
    font-size: 1.8rem;
    padding: 1.4rem 2rem;
    border-radius: .6rem;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    transition: background-color .3s ease-out;
    display: block;
    border:none;
}
.btn-verde {
    background-color: #00C897;
    margin: 2rem;
    text-align: center;
    min-width: 250px;
    cursor: pointer;
}
div .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}
</style>