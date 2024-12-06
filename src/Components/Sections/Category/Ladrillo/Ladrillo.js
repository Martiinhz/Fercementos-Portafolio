import ajover7 from '../../../../assets/Productos/Ajover/LadrilloCalao.png'
import ajover8 from '../../../../assets/Productos/Ajover/LadrilloFarol.png'
import santafe3 from '../../../../assets/Productos/LadrilleraSantafe/3.png'
import santafe4 from '../../../../assets/Productos/LadrilleraSantafe/4.png'
import logo from '../../../../assets/Productos/LadrilleraSantafe/logo.png'



const Ladrillos = [
    { id: 14, name: "Ladrillo Calado", image: ajover7, secondDescription:[
        {title: "Longitud", values: ["19 cm"]},
        {
            title: "Ancho", values: ["19 cm"],
        },
        {
            title: "Altura", values: ["10 cm"]
        },
        {
            title: "Peso", values: ["4 kg"]
        }
    ]},
    
    { id: 15, name: "Ladrillo Farol", image: ajover8, secondDescription: [
        {title: "Longitud", values: ["30 cm"]},
        {
            title: "Ancho", values: ["10 cm"],
        },
        {
            title: "Altura", values: ["20 cm"]
        },
        {
            title: "Peso", values: ["5 kg"]
        }
    ]}, 
    
    { id: 278, name: "Ladrillo Portante", image: santafe3, secondImage: logo,description: "Ladrillo Portante 306 Capuchino H", link: "https://www.santafe.com.co/wp-content/uploads/2021/11/FT-LPOR306CPH-LPOR306MCPH-1.pdf"},

    { id: 279, name: "Ladrillo Gran Formato", image: santafe4, secondImage:logo ,secondDescription: [
    {title: "Ladrillos Colores", values:["Ladrillo Gran Formato Cobrizo", "Ladrillo Gran Formato Cocoa", "Ladrillo Gran Formato Terracota"]}],
    link: "https://www.santafe.com.co/wp-content/uploads/2021/11/FT-LTGFCB115V2.pdf" },
];

export default Ladrillos;