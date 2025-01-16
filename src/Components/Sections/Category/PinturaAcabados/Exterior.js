import pintuland1 from '../../../../assets/Productos/Pintuland/SuperLavable.png'
import pintuland6 from '../../../../assets/Productos/Pintuland/Acriland.png'
import logoPintu from '../../../../assets/Productos/Pintuland/logo.png'

const Exterior = [

    {
        id: 70, name: "Acriland (Fachadas)", image: pintuland6,secondImage:logoPintu , secondDescription: [
            { title: "Presentación", values: ["Galón", "Cuñete (5 galones)"] },
            { title: "Peso", values: ["5.8 kg", "28 kg"] }
        ],
        link: "https://pintuland.com.co/wp-content/uploads/2022/08/Carta_De_Colores_Pintuland_Web.pdf"
    
    },
    {
        id: 65,
        name: "Superlavable (Tipo 1)",
        image: pintuland1,secondImage:logoPintu ,
        secondDescription: [
            { title: "Presentación", values: ["Cuarto ","Galón", "Cubeta (2.5 galones)","Cuñete (5 galones)"] },
            { title: "Peso", values: ["1.5 kg","5.8 kg", "14 kg", "28 kg"] }
        ],
        link: "https://pintuland.com.co/wp-content/uploads/2022/08/Carta_De_Colores_Pintuland_Web.pdf"
    },
];

export default Exterior;