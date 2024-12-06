import argos1 from '../../../../assets/Productos/Argos/Cementox50.png'
import argos2 from '../../../../assets/Productos/Argos/Cementox25.png'
import argos5 from '../../../../assets/Productos/Argos/CementoBlancox40.png'
import argos6 from '../../../../assets/Productos/Argos/CementoBlancox20.png'
import argos7 from '../../../../assets/Productos/Argos/Estructural.png'
import logo from '../../../../assets/Productos/Argos/logoArgos.png'


const Cementos = [

    { id: 1, name: "Cemento Gris x 50 kg", image: argos1,secondImage: logo , SecondDescription:["Elaboración de morteros para pisos, nivelaciones, lechadas y emboquillados.", "Reparaciones, remodelaciones, pequeñas obras y diversas aplicaciones domésticas."],link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-gris-uso-general.pdf" },
    { id: 2, name: "Cemento Gris x 25 kg", image: argos2,secondImage: logo ,  SecondDescription:["Elaboración de morteros para pisos, nivelaciones, lechadas y emboquillados.", "Reparaciones, remodelaciones, pequeñas obras y diversas aplicaciones domésticas."] ,link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-gris-uso-general.pdf" },
    { id: 3, name: "Cemento Blanco x 40 kg", image: argos5,secondImage: logo , SecondDescription:["Remodelaciones y reparaciones de baños, cocinas, fachadas, piscinas y todo tipo de terminados estéticos.", "Morteros para mampostería, pega de cerámicos, enchapes, acabados, recubrimientos interiores y para fachadas."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-blanco-general.pdf" },
    { id: 4, name: "Cemento Blanco x 20 kg", image: argos6,secondImage: logo , SecondDescription:["Remodelaciones y reparaciones de baños, cocinas, fachadas, piscinas y todo tipo de terminados estéticos.", "Morteros para mampostería, pega de cerámicos, enchapes, acabados, recubrimientos interiores y para fachadas."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-blanco-general.pdf"},
    { id: 5, name: "Cemento Estructural 42.5kg", image: argos7,secondImage: logo , SecondDescription:["Elaboración de concretos y morteros en plantas concreteras y centrales de mezclas.", "Estructuras de concreto con requisitos de rápida puesta en servicio."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-uso-estructural-max.pdf" },
    
    
];

export default Cementos;