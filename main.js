
let user = "";
let option = 0;
let quantity = 0;
let subTotal = 0;
let total = 0;
let totalPlusIVA = 0;
let continueBuying = true;

//Solicitud  de nombre
const userName = () => {
    do{
        user = prompt('Ingrese un nombe: ').toUpperCase ();
    } while (!user);

}
userName ();

//creamos clase de objetos de los productos

// class Product {
//     constructor(id,name, weight, price, img) {
//         this.id = id,   
//         this.name = name,
//         this.weight = weight,
//         this.price = Number(price),
//         this.img = img;
//     }
// };

// const coffe1 = new Product (1,'Bolivia', 250, 2000, '/assets/img/cafeBolivia.jpg');
// const coffe2 = new Product (2,'Bolivia Caturra 48', 250, 2500, '/assets/img/cafeBoliviaCaturra48.jpg' );
// const coffe3 = new Product (3,'Bolivia Caturra 72', 250, 2500, '/assets/img/cafeBoliviaCaturra72.jpg' );
// const coffe4 = new Product (4,'Bolivia Caturra NAT', 250, 1500, '/assets/img/cafeBoliviaCaturraNAT.jpg' );
// const coffe5 = new Product (5,'Brasil', 250, 3000, '/assets/img/cafeBrasil.jpg' );



// //creamos arrays de productos

// const products = [
//     coffe1,
//     coffe2,
//     coffe3,
//     coffe4,
//     coffe5
// ];

const purchase = [] // array carrito vacio

const totalSummary = [] // array para ver el resumen total de la compra

// for (const product of products){
//     console.log (product)
// }


// Funcion para mostrar un resúmen de las cantidades
const quantitySummary = (name, quantity, subTotal) => `${name} x ${quantity} unit/s., total ${subTotal}`;

//Con esta funcion obtengo la cantidad y el subtotal
const subTotalByQuantity = (price) => {
    do {
        quantity = parseInt(prompt('Choose quantity: '));        
} while (!(Number(quantity)));
    subTotal = price * quantity;
    return subTotal;
};
//Con esta funcion agrego el Iva al subTotal
const pluIVA = (total) => total * 1.21;

// ver a traves del MAP la lista de productos

let productList = products.map ((Product) => "- " + Product.name + " " + Product.weight +' gr' + " " + '$' + Product.price);
alert ('Welcome ' + user + ' These are our products:' + '\n' +  productList.join(" \n "));

    

//Selecion del  prodcto
do {
    let price = 0;
    let name = "";
    let summary = "";
    
    option = parseInt(prompt(' Choose product number:\n1. Café Bolivia\n2. Café Bolivia Caturra 48\n3. Café Bolivia Caturra 72\n4. Café Bolivia Caturra NAT\n5. Café Brasil'));

        switch (option){
            case 1:
                name = coffe1.name
                price = coffe1.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity, subTotal)
                break;
            
            case 2:
                name = coffe2.name
                price = coffe2.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity, subTotal)
                break;
            
            case 3:
                name = coffe3.name
                price = coffe3.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity, subTotal)
                break;
            
            case 4:
                name = coffe4.name
                price = coffe4.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity, subTotal)
                break;
            
            case 5:
                name = coffe5.name
                price = coffe5.price;
                subTotal = subTotalByQuantity(price);
                summary = quantitySummary(name, quantity, subTotal)
                break;
            
            default:
                alert('Enter a valid option');
                break
        }

    purchase.push({name, price, quantity});
    //console.log (purchase)

    totalSummary.push (summary + "\n");
    
    
    //REDUCE para obtener el total

    total = purchase.reduce ((acc , item) => acc + item.price * item.quantity, 0 );
    console.log (total)

    totalPlusIVA = (pluIVA(total).toFixed(2));

    continueBuying = confirm  ('Do you want to continue buying??');

} while (continueBuying);

alert(`The products choosed are: \n ${totalSummary} \n Subtotal: $${total} \n Total + IVA: $${totalPlusIVA} \n\n Thank you for buying `)