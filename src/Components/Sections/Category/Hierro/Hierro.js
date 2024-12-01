import hierro1 from "../../../../assets/Productos/Sidoc/Barracorrugada.png"
import hierro2 from "../../../../assets/Productos/Sidoc/ChipaCorrugada.png"
import hierro3 from "../../../../assets/Productos/Sidoc/MallaElectrosoldada.png"
import hierro4 from "../../../../assets/Productos/Sidoc/1.png"
import hierro5 from "../../../../assets/Productos/Sidoc/2.png"
import hierro6 from "../../../../assets/Productos/Sidoc/3.png"
import hierro7 from "../../../../assets/Productos/Sidoc/AlambreNegro.png"
import hierro8 from "../../../../assets/Productos/Sidoc/ALambreGris.png"
const Hierro = [
    {
        id: 1,
        name: "Varilla Corrugada",
        image: hierro1,
        secondDescription: [
            {
                title: "Varilla",
                values: ["6 mts, 9 mts y 12 mts: 1/4, 3/8, 1/2, 5/8, 3/4"],
            },
        ],
    },

    {
        id: 2, name: "Chipa Corrugada", image: hierro2,
        secondDescription: [
            {
                title: "Chipa:", values: ["1/4, 3/8, 1/2, 5/8 pulgadas"]
            }]
    },

    {
        id: 3,
        name:
            "Malla Electrosoldada",
        image: hierro3,
        secondDescription: [
            {
                title: "Malla electrosoldada", values: ["15x15 de 6 mts: 4 mm 5 mm"],
                
            },
            {
                title: "Rollo Malla electrosoldada", values: ["15x15 de 18 mts: 3.5 mm 4 mm"],
            }
        ]
    },

    { id: 4, name: "Alambre Negro 18", image: hierro7, secondDescription: [{ values: ["1 kg, 2 kg, 3 kg, 5 kg"]}] },
    { id: 5, name: "Alambre Galvanisado", image: hierro8, secondDescription: [{values: ["1 kg, 2 kg, 3 kg, 5kg"]}] }
];

export default Hierro;