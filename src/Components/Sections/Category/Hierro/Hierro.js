import hierro1 from "../../../../assets/Productos/Sidoc/Barracorrugada.png"
import hierro2 from "../../../../assets/Productos/Sidoc/ChipaCorrugada.png"
import hierro3 from "../../../../assets/Productos/Sidoc/MallaElectrosoldada.png"
import hierro7 from "../../../../assets/Productos/Sidoc/AlambreNegro.png"
import hierro8 from "../../../../assets/Productos/Sidoc/ALambreGris.png"
const Hierro = [
    {
        id: 1,
        name: "Varilla Corrugada 6 Metros",
        image: hierro1,
        secondDescription: [
            {
                title: "Calibre",
                values: ["9mm", "11mm", "12mm"],
            },
        ],
    },
    {
        id: 1,
        name: "Varilla Corrugada 9 Metros",
        image: hierro1,
        secondDescription: [
            {
                title: "Calibre",
                values: ["9mm", "11mm", "12mm", "1/4", "1/2", "3/4", "3/8", "5/8", "7/8"],
            },

        ],
    },
    {
        id: 1,
        name: "Varilla Corrugada 12 Metros",
        image: hierro1,
        secondDescription: [
            {
                title: "Calibre",
                values: ["9mm", "11mm", "12mm", "1/4", "1/2", "3/4", "3/8", "5/8", "7/8"],
            },
        ],
    },

    {
        id: 2, name: "Chipa Corrugad x kilo", image: hierro2,
        secondDescription: [
            {
                title: "Chipa x kilo", values: ["1/4, 3/8 pulgadas"]
            }]
    },

    {
        id: 5,
        name:
            "Rollo malla electrosolada de 3.5 mm ",
        image: hierro3,
        secondDescription: [
            {
                title: "Medidas", values: ["18 metros x 2.35 metros"],
                
            },
        ]
    },
    {
        id: 1,
        name:
            "Malla Electrosoldada 4mm",
        image: hierro3,
        secondDescription: [
            {
                title: "Medidas", values: ["15x15 6 metro x 2.35 metros"],
                
            },
          
        ]
    },
    {
        id: 3,
        name:
            "Malla Electrosoldada  5mm",
        image: hierro3,
        secondDescription: [
            {
                title: "Medidas", values: ["15x15 6 metro x 2.35 metros"],
                
            },
           
        ]
    },
    {
        id: 2,
        name:
            "Malla Electrosoldada 6mm",
        image: hierro3,
        secondDescription: [
            {
                title: "Medidas", values: ["15x15 6 metro x 2.35 metros"],
                
            },
           
        ]
    },
   
    {
        id: 4,
        name:
            "Malla Electrosoldada 6.5 mm",
        image: hierro3,
        secondDescription: [
            {
                title: "Medidas", values: ["15x15 6 metro x 2.35 metros"],
                
            },
          
        ]
    },
   

    { id: 4, name: "Alambre Negro 18", image: hierro7, secondDescription: [{title: "Kilos", values: [("Apeticion del cliente")]},
    {
        title: "Rollo", values: ["25 Kilos"]
    }
] },
    { id: 5, name: "Alambre Galvanisado x kilo", image: hierro8, secondDescription: [{title: "Calibres",values: ["12", "14", "18"]}] }
];

export default Hierro;