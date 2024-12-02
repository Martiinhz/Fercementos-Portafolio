import ajover7 from '../../../../assets/Productos/Ajover/LadrilloCalao.png'
import ajover8 from '../../../../assets/Productos/Ajover/LadrilloFarol.png'
import ajover9 from '../../../../assets/Productos/Ajover/LadrilloToleto.png'
import santafe3 from '../../../../assets/Productos/LadrilleraSantafe/3.png'
import santafe4 from '../../../../assets/Productos/LadrilleraSantafe/4.png'
import santafe5 from '../../../../assets/Productos/LadrilleraSantafe/5.png'
import santafe6 from '../../../../assets/Productos/LadrilleraSantafe/6.png'


const Ladrillos = [
    { id: 14, name: "Ladrillo Calado", image: ajover7, secondDescription:[{title: "Medidas", values: ["10 19 cm x 10 cm x 19 cm 25 u/m2 4 kilos"]}]},
    { id: 15, name: "Ladrillo Farol", image: ajover8, secondDescription: [{title: "Medidas", values: ["30 cm x 10 cm x 20 cm 15u/m2 5 kilos"]}]}, 
    { id: 278, name: "Ladrillo Portante", image: santafe3, description: "Ladrillo Portante 306 Capuchino H", link: "https://www.santafe.com.co/wp-content/uploads/2021/11/FT-LPOR306CPH-LPOR306MCPH-1.pdf"},

    { id: 279, name: "Ladrillo Gran Formato", image: santafe4, secondDescription: [
    {title: "Ladrillos Colores", values:["Ladrillo Gran Formato Cobrizo", "Ladrillo Gran Formato Cocoa", "Ladrillo Gran Formato Terracota"]}],
    link: "https://www.santafe.com.co/wp-content/uploads/2021/11/FT-LTGFCB115V2.pdf" },
];

export default Ladrillos;