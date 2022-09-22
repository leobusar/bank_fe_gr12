<template>
    <div id="app" class="app">
        <div class="header">
            <h1>Banco Misión TIC</h1>
            <nav v-if="is_auth">
                <button>Inicio</button>
                <button>Cuenta</button>
                <button>Cerrar sesión</button>
            </nav>
            <nav v-else>
                <button @click="loadLogin">Iniciar sesión</button>
                <button @click="loadSignUp">Registrarse</button>
            </nav>
        </div>

        <div class="main-component">
            <router-view
                @completedLogin="completedLogin"
            >

            </router-view>
        </div>

        <div class="footer">
            <h2>Misión TIC 2022</h2>
        </div>
    </div>
</template>
<script>
// Options API
export default {
    name: "App",
    data: function() {
        return {
            is_auth: false,
        }
    },
    methods: {
        loadLogin: function(){
            this.$router.push({name:"login"})
        },
        loadSignUp: function(){
            this.$router.push({name:"signup"})
        },
        completedLogin: function(data) {
            console.log(data)
        }

    },
    created: function() {

    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');

   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body {
    font-family: 'Roboto', 'sans-serif';
   }

   .header {
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #283747;
    color: #E5E7E9;
    display: flex;
    justify-content: space-between;
    align-items: center;
   }

   .header h1 {
    width: 20%;
    text-align: center;
   }

   .header nav {
    height: 100%;
    width: 20%;
    font-size: 20px;

    display: flex;
    justify-content: space-around;
    align-items: center;
   }

   .header nav button {
    color: #E5E7E9;
    background-color: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
   }

   .header nav button:hover {
    color:#283747;
    background-color: #E5E7E9;
   }

   .main-component {
    height: 75vh;
   }

   .footer {
     width: 100%;
     height: 10vh;
     min-height: 80px;
     background-color: #283747;
     color: #E5E7E9;
   }

   .footer h2 {
     width: 100%;
     height: 100%;

     display: flex;
     justify-content: center;
     align-items: center;
    }

</style>
