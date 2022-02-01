/* class Instrumento{

    constructor(tipo, marca, modelo, precio, stock ){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
    }

    sumaIva(){
        this.precio = this.precio*1.21;
    }

    restaStock(){
        this.stock = this.stock-1;
    }

}



var continuar = true;
const productos = [];
const carrito = [];
productos.push (new Instrumento("Guitarra","Gibson","Les Paul",1000,3));
productos.push (new Instrumento("Guitarra","Fender","Stratocaster",800,2));
productos.push (new Instrumento("Guitarra","Jackson","Dinky",650,3));
const guitarras = productos.filter(elemento => elemento.tipo === "Guitarra");
console.log(guitarras);
productos.push (new Instrumento("Bajo","Fender","Jazz Bazz",1000,1));
productos.push (new Instrumento("Bajo","Gibson","SG",800,2));
productos.push (new Instrumento("Bajo","Ephiphone","Thunderbird",500,3));
const bajos = productos.filter(elemento => elemento.tipo === "Bajo");
console.log(bajos);


const menu = () =>{
    let opcion
do {

    opcion = prompt(`Bienvenido a la tienda de instrumentos ¿Que desea hacer? 
    
    1- Comprar 
    
    2- Ver carrito 
    
    3- Salir`);
    if(opcion == "1" || opcion == "2" || opcion == "3");

    switch(opcion){

        case "1": 

        let eleccion = prompt(`Ingrese el instrumento que desa ver:
        1- Guitarras
        
        2- Bajos`);
        
        if(eleccion == "1" || eleccion == "2");

        switch(eleccion){

            case "1":
                for (guitarra of guitarras){
                    alert(`                    
                    Marca: ${guitarra.marca} 

                    Modelo: ${guitarra.modelo} 

                    Precio: ${guitarra.precio}`);
                }

                let compra = prompt(`¿Cual guitarra desea agregar al carrito? 
                1- Gibson
                
                2- Fender
                
                3-Jackson`);

                if (compra == "1"){
                    carrito.push(productos[0]);
                }else if (compra == "2"){
                    carrito.push(productos[1]);
                }else{
                    carrito.push(productos[2]);
                }
            break;
        


            case "2":
                for (bajo of bajos){
                    alert(`
                    Marca: ${bajo.marca} 

                    Modelo: ${bajo.modelo} 

                    Precio: ${bajo.precio}`);
                }
                let compra2 = prompt(`¿Cual bajo desea agregar al carrito?
                
                1- Fender
                
                2- Gibson
                
                3-Ephiphone`);

                if (compra2 == "1"){
                    carrito.push(productos[3]);
                }else if (compra2 == "2"){
                    carrito.push(productos[4]);
                }else{
                    carrito.push(productos[5]);
                }
                break;
        }

        break;

        case "2":

            for (precioIva of productos){
                precioIva.sumaIva();
            }

            let ul = document.createElement('ul');
            let inner = "";

            
            for (items of carrito){
            inner += `<li>Producto: ${items.marca} ${items.modelo}
                        Precio: ${items.precio}</li>`;
                        
            }


            ul.innerHTML = inner;
            document.body.appendChild(ul);

            continuar = false;

        break;


        case "3":
            alert("Gracias por su compra");
            continuar = false;
            break;


    }




}while (continuar == true);



    

}    





menu(); */

var btnAgregarCarrito = document.getElementsByClassName("comprarItem");
for (let i = 0; i < btnAgregarCarrito.length; i++) {
    var boton = btnAgregarCarrito[i];
    boton.addEventListener("click", btnCarritoClick);
    
}

function btnCarritoClick(event){
    var boton = event.target;
    var itemTienda = boton.parentElement.parentElement;
    var nombre = itemTienda.getElementsByClassName("card-title")[0].innerText;
    var precio = itemTienda.getElementsByClassName("itemPrecio")[0].innerText;
    var imagen = itemTienda.getElementsByClassName("card-img-top")[0].src;
    agregarItemCarrito(nombre,precio,imagen);

}

function agregarItemCarrito(nombre,precio,imagen) {
    var listaCarrito = document.createElement("div");
    var itemsCarrito = document.getElementsByClassName("items-carrito")[0];
    var contenidoCarrito = `
    <div class="offcanvas-body items-carrito">
    <div>
        <img class="card-img-top" src="${imagen}" width="100" height="100"> 
        <span class="card-title">${nombre}</span>
        <span class="itemPrecio">${precio}</span>
    </div>
</div>`;
    listaCarrito.innerHTML = contenidoCarrito;
    itemsCarrito.appendChild(listaCarrito)
}



function cambiarColor(color){
    document.getElementById("gbLespaul").src=color;
}

let radioBlanco = document.getElementById("lesBlanco")
let radioNegro = document.getElementById("lesNegro");

radioBlanco.addEventListener("click",()=>{
    cambiarColor("./imagenes/lespaulBlanca.jpg");
})

radioNegro.addEventListener("click",()=>{
    cambiarColor("./imagenes/lespaulNegra.jpg");
})

