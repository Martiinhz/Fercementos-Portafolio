import proteja2 from '../../../../assets/Productos/Proteja/2.png'
import proteja3 from '../../../../assets/Productos/Proteja/3.png'
import proteja4 from '../../../../assets/Productos/Proteja/4.png'
import proteja5 from '../../../../assets/Productos/Proteja/5.png'
import logoTeja from '../../../../assets/Productos/Proteja/logo.png'


const Claraboya = [

    {
        id: 2, name: "Claraboya ", image: proteja2, secondImage: logoTeja, secondDescription: [
            {
                title: "Nombre", values: ["No 5","No 6"]
            },
            {
                title: "Longitu mts", values: ["1.53 m","1.83 m"]
            },

            {
                title: "Ancho mts", values: ["0.92","0.92"]
            }
        ]
    },
    { id: 3, name: "Caballate tipo nuevo", image: proteja3,secondImage: logoTeja, description: "Caballete de poca altura, se coloca en la cumbrera de una cubierta a dos o más aguas. Disponible para pendientes de techo de 15° y de 36% (20°) y 47% (25°) sobre pedido. Debe ser asegurado con 4 tornillos, 2 por cada lado en la segunda y quinta onda. Tener en cuenta la aplicación de un sellante debajo de la cabeza del tornillo, no silicona." },
    { id: 4, name: "Caballate tipo viejo", image: proteja4,secondImage: logoTeja, description: "Se utiliza como cierre de una cubierta en su línea de caballetes, al inicio y al final. Disponible para pendientes de techo de 27% (15°). Debe ser asegurado con tornillos." },
    { id: 5, name: "Limatesa limahoya teja", image: proteja5, secondImage: logoTeja,description: "Pieza de unión entre dos pendientes de una cubierta que forma un ángulo saliente y entrante. Debe ser asegurado con tornillos tipo paleta o amarras." },
];

export default Claraboya;