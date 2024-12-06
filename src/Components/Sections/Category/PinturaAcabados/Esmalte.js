import pintuland9 from '../../../../assets/Productos/Pintuland/EsmalteLinea.png'
import pintuland10 from '../../../../assets/Productos/Pintuland/EsmalteLineaDorado.png'
import pintuland4 from '../../../../assets/Productos/Pintuland/BarnizSintetico.png'
import pintuland11 from '../../../../assets/Productos/Pintuland/Anticorrosivo.png'
import logoPintu from '../../../../assets/Productos/Pintuland/logo.png'


const Esmalte = [

    {
        id: 73, name: "Esmalte Línea Clásica", image: pintuland9,secondImage:logoPintu , secondDescription: [
            { title: "Presentación", values: ["Cuarto ","Galón", "Cubeta (2.5 galones)","Cuñete (5 galones)"] },
            { title: "Peso", values: ["1.5 kg","5.8 kg", "14 kg", "28 kg"] }
        ],
        link: "https://pintuland.com.co/wp-content/uploads/2022/08/Carta_De_Colores_Pintuland_Web.pdf"
    },
    {
        id: 74, name: "Esmalte Línea Dorada", image: pintuland10,secondImage:logoPintu , secondDescription: [
            { title: "Presentación", values: ["Cuarto ","Galón", "Cubeta (2.5 galones)","Cuñete (5 galones)"] },
            { title: "Peso", values: ["1.5 kg","5.8 kg", "14 kg", "28 kg"] }
        ],
        link: "https://pintuland.com.co/wp-content/uploads/2022/08/Carta_De_Colores_Pintuland_Web.pdf"
    },
    {
        id: 68, name: "Barniz Sintético", image: pintuland4,secondImage:logoPintu , secondDescription: [
            { title: "Presentación", values: ["Cuarto","Galón", "Cuñete (5 galones)" ] },
            { title: "Peso", values: ["1.5 kg","5.8 kg", "28 kg"] }
        ],
        link: "https://pintuland.com.co/wp-content/uploads/2022/08/Carta_De_Colores_Pintuland_Web.pdf"
    },
    {
        id: 75, name: "Anticorrosivo", image: pintuland11,secondImage:logoPintu , secondDescription: [
            { title: "Presentación", values: ["Galón", "Cuñete (5 galones)"] },
            { title: "Peso", values: ["5.8 kg ", "28 kg"] }
        ],
        link: "https://pintuland.com.co/wp-content/uploads/2022/08/Carta_De_Colores_Pintuland_Web.pdf"
    },];

export default Esmalte;