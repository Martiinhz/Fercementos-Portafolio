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

const CementosAgregados = [

    { id: 1, name: "Cemento Gris x 50 kg", image: argos1, description: "El cemento es un material que acciona con el agua y que actúa como aglutinante presentando propiedades de adherencia y cohesión. Es diseñado para uso de mezclas de concreto o mortero, pega, pañete y acabados, para ser utilizados en diversas estructuras y construcciones." },
    { id: 2, name: "Cemento Gris x 25 kg", image: argos2, description: "El cemento es un material que acciona con el agua y que actúa como aglutinante presentando propiedades de adherencia y cohesión. Es diseñado para uso de mezclas de concreto o mortero, pega, pañete y acabados, para ser utilizados en diversas estructuras y construcciones." },
    { id: 3, name: "Cemento Blanco x 40 kg", image: argos5, description: "El cemento es un material que acciona con el agua y que actúa como aglutinante presentando propiedades de adherencia y cohesión. Es diseñado para uso de mezclas de concreto o mortero, pega, pañete y acabados, para ser utilizados en diversas estructuras y construcciones." },
    { id: 4, name: "Cemento Blanco x 20 kg", image: argos6, description: "El cemento es un material que acciona con el agua y que actúa como aglutinante presentando propiedades de adherencia y cohesión. Es diseñado para uso de mezclas de concreto o mortero, pega, pañete y acabados, para ser utilizados en diversas estructuras y construcciones." },
    { id: 5, name: "Cemento Estructural 42.5kg", image: argos7, description: "El cemento es un material que acciona con el agua y que actúa como aglutinante presentando propiedades de adherencia y cohesión. Es diseñado para uso de mezclas de concreto o mortero, pega, pañete y acabados, para ser utilizados en diversas estructuras y construcciones." },
    { id: 6, name: "Cal Hidratada x 10 kg", image: argos8, description: "La Cal Hidratada es un hidróxido de calcio ideal para uso en construcción, agricultura, minería y a nivel doméstico. Se encuentra como cal viva y cal hidratada y tiene innumerables usos en la construcción, la industria química y farmacéutica."},
    { id: 7, name: "Arena express x 40 kg", image: argos11, SecondDescription: ["Arena medio ", "Arena gruesas", "Triturado"] },
    { id: 8, name: "Arena media x metro", image: argos9, SecondDescription: ["Tirado", "Estopas"] },
    { id: 9, name: "Arena gruesa x metro", image: argos9, SecondDescription: ["Tirado", "Estopas"] },
    { id: 10, name: "Triturado x metro", image: argos10, SecondDescription: ["Tirado", "Estopas"] },
    { id: 11, name: "Grano Blanco #00 x 23 kg", image: argos12, description: "los granos de agregados son como los 'ladrillos' que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 12, name: "Grano Blanco #1 x 23 kg", image: argos13, description: "los granos de agregados son como los 'ladrillos' que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 13, name: "Grano Blanco #2 x 23 kg", image: argos14, description: "los granos de agregados son como los ladrillos que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 14, name: "Grano Café 1 x 23 kg", image: argos15, description: "los granos de agregados son como los 'ladrillos' que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 15, name: "Grano Café 2 x 23 kg", image: argos16, description: "los granos de agregados son como los 'ladrillos' que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 16, name: "Grano Negro 1 x 23 kg", image: argos17, description: "los granos de agregados son como los 'ladrillos' que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 17, name: "Grano Negro 2 x 23 kg", image: argos18, description: "los granos de agregados son como los 'ladrillos' que, junto con el cemento, forman el concreto. Su tamaño, forma y limpieza son fundamentales para obtener un concreto de buena calidad y duradero." },
    { id: 1, name: "Gravilla Cafe 1 x 50 kg", image: argos19, description: "La grava o gravilla es roca molida (natural o artificial) que puede ser de varios tamaños que van desde los 2 hasta los 64 milímetros de grosor, este agregado se puede clasificar en fina, media y gruesa." },
    { id: 2, name: "Gravilla Café 2 x 50 kg", image: argos20, description: "La grava o gravilla es roca molida (natural o artificial) que puede ser de varios tamaños que van desde los 2 hasta los 64 milímetros de grosor, este agregado se puede clasificar en fina, media y gruesa." },
    { id: 3, name: "Gravilla Gris 1 x 23 kg", image: argos21, description: "La grava o gravilla es roca molida (natural o artificial) que puede ser de varios tamaños que van desde los 2 hasta los 64 milímetros de grosor, este agregado se puede clasificar en fina, media y gruesa." },
    { id: 4, name: "Gravilla Gris 2 x 23 kg", image: argos22, description: "La grava o gravilla es roca molida (natural o artificial) que puede ser de varios tamaños que van desde los 2 hasta los 64 milímetros de grosor, este agregado se puede clasificar en fina, media y gruesa." },
    { id: 5, name: "Gravilla Mona x 23 kg", image: argos23, description: "La grava o gravilla es roca molida (natural o artificial) que puede ser de varios tamaños que van desde los 2 hasta los 64 milímetros de grosor, este agregado se puede clasificar en fina, media y gruesa." },
    { id: 6, name: "Pieadra Jardin Blanca", image: roca, description: "Los agregados, son materiales granulares e inertes, de origen natural o por un proceso de trituración a partir de rocas. Constituyen entre el 65% y el 85% del volumen total del Concreto; además, constituyen aproximadamente el 95% de las mezclas asfálticas." },

];

export default CementosAgregados;