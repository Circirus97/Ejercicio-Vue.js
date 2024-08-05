<template>

    <section class="banner-section w-100 p-10">
        <form>
            <div class="search-input d-middle">
                <input 
                type="text"
                required="true"
                >

                <span>Search movie</span>

            </div>

        </form>

        <div class="container-banner-img">
            <!--Se le agg : al inicio del src para que tome lo que vaa  estar en la etiqueta o tambien como v-bind -->
            <img :src="img" alt="">
        </div>
    </section>

</template>

<script setup lang="ts">
// @ts-ignore //deshabilita TypeScript solo en la siguiente linea
import svgImage from '@/assets/images/header-img.svg'

const img = svgImage;

</script>

<style lang="scss" scoped>  // el atributo scoped es para que los estilos solo me apliquen en esta etiqueta template

.banner-section{
    width: 100%;
    height: 50vh;
    background-image: url(../assets/images/banner-bg.png);
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    

    //Selectores anidados
    form{
        .search-input{

        }
    }

    .container-banner-img img{
        width: 200px;
        animation: animated-img 4s linear infinite;
    }
}

.d-middle{
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes animated-img{
    30%{
        transform: translateY(-15px);
    }
    60%{
        transform: translateY(30%px);
    }
}



</style>