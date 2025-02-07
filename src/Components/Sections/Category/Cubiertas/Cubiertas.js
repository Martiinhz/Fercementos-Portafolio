import proteja1 from '../../../../assets/Productos/Proteja/1.png'
import proteja2 from '../../../../assets/Productos/Proteja/2.png'
import proteja3 from '../../../../assets/Productos/Proteja/3.png'
import proteja4 from '../../../../assets/Productos/Proteja/4.png'
import proteja5 from '../../../../assets/Productos/Proteja/5.png'
import proteja7 from '../../../../assets/Productos/Proteja/7.png'
import proteja8 from '../../../../assets/Productos/Proteja/8.png'
import proteja9 from '../../../../assets/Productos/Proteja/9.png'
import acuaviva1 from '../../../../assets/Productos/Acuaviva/Tanque250.png'
import acuaviva2 from '../../../../assets/Productos/Acuaviva/Tanque500.png'
import acuaviva4 from '../../../../assets/Productos/Acuaviva/Tanque1000.png'
import acuaviva5 from '../../../../assets/Productos/Acuaviva/Tanque2000.png'
import acuaviva6 from '../../../../assets/Productos/Acuaviva/Tanque5000.png'
import acuaviva7 from '../../../../assets/Productos/Acuaviva/Tanque6000.png'
import santafe1 from '../../../../assets/Productos/LadrilleraSantafe/Bloquelon.png'
import santafe2 from '../../../../assets/Productos/LadrilleraSantafe/2.png'
import ajover1 from '../../../../assets/Productos/Ajover/TejaAjover5años.png'
import ajover2 from '../../../../assets/Productos/Ajover/TejaPolicarbonato10años.png'
import ajover3 from '../../../../assets/Productos/Ajover/TejaDuty.png'
import ajover4 from '../../../../assets/Productos/Ajover/TejaTraslucida.png'
import ajover5 from '../../../../assets/Productos/Ajover/TejaZing.png'
import logoTeja from '../../../../assets/Productos/Proteja/logo.png'


const Cubiertas = [

    {
        id: 1, name: "Teja proteja perfil #7 ", image: proteja1, secondImage: logoTeja,secondDescription: [
            {
                title: "Nombre", values: ["No 4", "No 5", "No 6", "No 8", "No 10", "No 12"],
            },
            {
                title: "Longitud mts", values: ["1.220", "1.525", "1.830", "2.440", "3.050", "3.660"],
            },
            {
                title: "Ancho mts", values: ["0.92", "0.92", "0.92", "0.92", "0.92", "0.92"]
            }

        ], link: "https://media.proteja.com.co/pd55130/original/-977337359/ft_perfil7_proteja_febrero2024_v1.pdf"
    },
    {
        id: 2, name: "Claraboya", image: proteja2,  secondImage: logoTeja,secondDescription: [
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
    { id: 3, name: "Caballate tipo nuevo", image: proteja3,  secondImage: logoTeja,description: "Caballete de poca altura, se coloca en la cumbrera de una cubierta a dos o más aguas. Disponible para pendientes de techo de 15° y de 36% (20°) y 47% (25°) sobre pedido. Debe ser asegurado con 4 tornillos, 2 por cada lado en la segunda y quinta onda. Tener en cuenta la aplicación de un sellante debajo de la cabeza del tornillo, no silicona." },
    { id: 4, name: "Caballate tipo viejo", image: proteja4,  secondImage: logoTeja,description: "Se utiliza como cierre de una cubierta en su línea de caballetes, al inicio y al final. Disponible para pendientes de techo de 27% (15°). Debe ser asegurado con tornillos." },
    { id: 5, name: "Limatesa limahoya teja", image: proteja5, secondImage: logoTeja, description: "Pieza de unión entre dos pendientes de una cubierta que forma un ángulo saliente y entrante. Debe ser asegurado con tornillos tipo paleta o amarras." },
    {
        id: 6, name: "Teja Colonial", image: proteja7, secondImage: logoTeja,secondDescription: [

            {
                title: "Longitu m", values: ["0.70", "1.60"]
            },
            {
                title: "Ancho m", values: ["1.062", "1.062"]
            }
        ], link: "https://media.proteja.com.co/pd55134/original/-1532273851/ft_colonial_proteja_febrero2024_v1.pdf"
    },


    { id: 22, name: "Teja Ajover Ajozinc", image: ajover1, secondDescription: [
        {
            title: "Teja #", values: ["6", "7", "8", "10", "12"]
        },
        {
            title: "Ancho m", values: ["0.83", "0.83", "0.83", "0.83", "0.83"]
        },
        {
            title: "Largo m", values: ["1.83", "2.15", "2.44", "3.05", "3.66"]
        }
    ] },
    { id: 33, name: "Teja Policarbonato Cristal", image: ajover2, secondDescription: [
        {
            title: "Teja #", values: ["4", "5", "6", "8", "10", "12"]
        },
        {
            title: "Ancho m", values: ["0.92", "0.92", "0.92", "0.92", "0.92", "0.92"]
        },
        {
            title: "Largo m", values: ["1.22", "1.50", "1.83", "2.44", "3.05", "3.66"]
        }
    ]},
    { id: 103, name: "Teja Ajonit Heavy Duty", image: ajover3, secondDescription: [
        {
            title: "Teja #", values: ["4", "5", "6", "8", "10", "12"]
        },
        {
            title: "Ancho m", values: ["0.92", "0.92", "0.92", "0.92", "0.92", "0.92"]
        },
        {
            title: "Largo m", values: ["1.22", "1.52", "1.83", "2.44", "3.05", "3.66"]
        }
    ] },
    { id: 113, name: "Teja Ajozinc Translucida", image: ajover4, secondDescription: [
        {
            title: "Teja #", values: ["6", "7", "8", "10", "12"]
        },
        {
            title: "Ancho m", values: ["0.92", "0.92", "0.92", "0.92", "0.92"]
        },
        {
            title: "Largo m", values: ["1.83", "2.15", "2.44", "3.05", "3.66"]
        }
    ] },
    { id: 124, name: "Teja de Zinc Calibre 34 y 35", image: ajover5, secondDescription: [
        {
            title: "Medidas" ,values: ["2.15", "2.44", "3.05"]
        }
    ] },

    {
            id: 7, name: "Cinta Asfaltica Sika", image: proteja8, secondDescription: [
                {
                    title: "Ancho", values: ["15cm"]
                },
                {
                    title: "Largo", values: ["10mts"]
                }
            ]
        },
    
        {
            id: 8, name: "Cinta Asfaltica Alumban", image: proteja9, secondDescription: [
                {
                    title: "Ancho", values: ["10cm", "20cm", "30cm", "50cm"]
                },
                {
                    title: "Largo", values: ["10mts", "10mts", "10mts", "10mts"]
                }
            ]
        },
    
    { id: 9, name: "Tanque 250 L", image: acuaviva1, description: "Peso del kit (Tanque + tapa) 7 kg" },
    { id: 10, name: "Tanque 500 L", image: acuaviva2, description: "Peso de kit (Tanque + tapa) 11 kg" },
    { id: 11, name: "Tanque 1000 L", image: acuaviva4, description: "Peso de kit (Tanque + tapa) 18 kg" },
    { id: 12, name: "Tanque 2000 L", image: acuaviva5, description: "Peso de kit (Tanque + tapa) 37 kg" },
    { id: 13, name: "Tanque 5000 L", image: acuaviva6, description: "Peso de kit (Tanque + tapa) 100 kg" },
    { id: 14, name: "Tanque 6000 L", image: acuaviva7, description: "Peso de kit (Tanque + tapa) 119" },
    {
        id: 15, name: "Bloquelon placa facil", image: santafe1, secondDescription: [
            {
                title: "Alto cm", values: ["80.0"]
            },
            {
                title: "Ancho cm", values: ["22.8"]
            },
            {
                title: "Largo cm", values: ["7.7"]
            }
        ]
    },
    {
        id: 16, name: "Perfil entrepiso negro", image: santafe2, secondDescription: [
            {
                title: "Medida", values: ["90 X 130 MM LARGO 12 M"]
            }
        ]
    },
];

export default Cubiertas;

