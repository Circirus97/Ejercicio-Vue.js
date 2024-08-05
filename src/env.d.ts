/// <reference types="vite/client" />

//Declara modulo por archivos vue
declare module '*.vue'{//Cualquier archivo que termine en la extension .vue
    import { DefineComponent } from "vue"; //Se importe desde vue
    const component: DefineComponent<{}, {}, any>; //Define el componente
    //Exporta el componente
    export default component;
}
