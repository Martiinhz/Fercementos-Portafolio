import argos1 from '../../../../assets/Productos/Argos/Cementox50.png'
import argos2 from '../../../../assets/Productos/Argos/Cementox25.png'
import argos5 from '../../../../assets/Productos/Argos/CementoBlancox40.png'
import argos6 from '../../../../assets/Productos/Argos/CementoBlancox20.png'
import argos7 from '../../../../assets/Productos/Argos/Estructural.png'
import argos8 from '../../../../assets/Productos/Argos/CalHidratadax10.png'
import argos9 from '../../../../assets/Productos/Argos/arenaGruesa.png'
import argos10 from '../../../../assets/Productos/Argos/Triturado.png'
import argos11 from '../../../../assets/Productos/Ajover/1.png'
import argos12 from '../../../../assets/Productos/Ajover/GranoBlanco00.png'
import argos13 from '../../../../assets/Productos/Ajover/GranoBlanco1.png'
import argos14 from '../../../../assets/Productos/Ajover/GranoBlanco2.png'
import argos15 from '../../../../assets/Productos/Ajover/GranoCafe1.png'
import argos16 from '../../../../assets/Productos/Ajover/GranoCafe2.png'
import argos17 from '../../../../assets/Productos/Ajover/GranoNegro1.png'
import argos18 from '../../../../assets/Productos/Ajover/GranoNegro2.png'
import argos19 from '../../../../assets/Productos/Ajover/GravillaCafe1.png'
import argos20 from '../../../../assets/Productos/Ajover/GravillaCafe2.png'
import argos21 from '../../../../assets/Productos/Ajover/GravillaGris1.png'
import argos22 from '../../../../assets/Productos/Ajover/GravillaGris2.png'
import argos23 from '../../../../assets/Productos/Ajover/GravillaMona2.png'
import roca from '../../../../assets/Productos/Ajover/PiedraJardinBlanca.png'
import logo from '../../../../assets/Productos/Argos/logoArgos.png'

const CementosAgregados = [

    { id: 1, name: "Cemento Gris x 50 kg", image: argos1,secondImage: logo , SecondDescription:["Elaboración de morteros para pisos, nivelaciones, lechadas y emboquillados.", "Reparaciones, remodelaciones, pequeñas obras y diversas aplicaciones domésticas."],link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-gris-uso-general.pdf" },
    { id: 2, name: "Cemento Gris x 25 kg", image: argos2,secondImage: logo ,  SecondDescription:["Elaboración de morteros para pisos, nivelaciones, lechadas y emboquillados.", "Reparaciones, remodelaciones, pequeñas obras y diversas aplicaciones domésticas."] ,link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-gris-uso-general.pdf" },
    { id: 3, name: "Cemento Blanco x 40 kg", image: argos5,secondImage: logo , SecondDescription:["Remodelaciones y reparaciones de baños, cocinas, fachadas, piscinas y todo tipo de terminados estéticos.", "Morteros para mampostería, pega de cerámicos, enchapes, acabados, recubrimientos interiores y para fachadas."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-blanco-general.pdf" },
    { id: 4, name: "Cemento Blanco x 20 kg", image: argos6,secondImage: logo , SecondDescription:["Remodelaciones y reparaciones de baños, cocinas, fachadas, piscinas y todo tipo de terminados estéticos.", "Morteros para mampostería, pega de cerámicos, enchapes, acabados, recubrimientos interiores y para fachadas."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-blanco-general.pdf"},
    { id: 5, name: "Cemento Estructural 42.5kg", image: argos7,secondImage: logo , SecondDescription:["Elaboración de concretos y morteros en plantas concreteras y centrales de mezclas.", "Estructuras de concreto con requisitos de rápida puesta en servicio."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cemento-uso-estructural-max.pdf" },
    { id: 6, name: "Cal Hidratada x 10 kg", image: argos8,secondImage: logo , SecondDescription:["Pintura para blanquear de bajo costo.", "Componente en la elaboración de morteros para mampostería.", "Materia prima para pintura de vinilos."], link: "https://colombia.argos.co/fichas_tecnicas/ft-cal-hidratada-uso-general.pdf"},
    
    
    { id: 7, name: "Arena express x 40 kg", image: argos11, SecondDescription: ["Arena medio ", "Arena gruesas", "Triturado"] },
    { id: 8, name: "Arena media x metro", image: argos9, SecondDescription: ["Tirado", "Estopas"] },
    { id: 9, name: "Arena gruesa x metro", image: argos9, SecondDescription: ["Tirado", "Estopas"] },
    { id: 10, name: "Triturado x metro", image: argos10, SecondDescription: ["Tirado", "Estopas"] },
    { id: 11, name: "Grano Blanco #00 x 23 kg", image: argos12,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."]},
    { id: 12, name: "Grano Blanco #1 x 23 kg", image: argos13,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."] },
    { id: 13, name: "Grano Blanco #2 x 23 kg", image: argos14,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."] },
    { id: 14, name: "Grano Café #1 x 23 kg", image: argos15, SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."] },
    { id: 15, name: "Grano Café #2 x 23 kg", image: argos16,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."] },
    { id: 16, name: "Grano Negro #1 x 23 kg", image: argos17,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."] },
    { id: 17, name: "Grano Negro #2 x 23 kg", image: argos18,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."] },
    { id: 18, name: "Gravilla Cafe #1 x 50 kg", image: argos19, SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."]  },
    { id: 19, name: "Gravilla Café #2 x 50 kg", image: argos20,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."]},
    { id: 20, name: "Gravilla Gris #1 x 23 kg", image: argos21,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."]},
    { id: 21, name: "Gravilla Gris #2 x 23 kg", image: argos22,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."]},
    { id: 22, name: "Gravilla Mona x 23 kg", image: argos23,  SecondDescription: ["Mezclas de concreto.", "Mezclas de concreto asfáltico.", "Llenos y filtros.", "Usos decorativos."]},
    { id: 23, name: "Pieadra Jardin Blanca x 40 kg", image: roca, description: "Los agregados, son materiales granulares e inertes, de origen natural o por un proceso de trituración a partir de rocas. Constituyen entre el 65% y el 85% del volumen total del Concreto; además, constituyen aproximadamente el 95% de las mezclas asfálticas." },

];

export default CementosAgregados;