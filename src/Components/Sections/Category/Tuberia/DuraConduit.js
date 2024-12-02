import celta59 from '../../../../assets/Productos/Celta/59.png'
import celta60 from '../../../../assets/Productos/Celta/60.png'
import celta152 from '../../../../assets/Productos/Celta/137.png'
import celta153 from '../../../../assets/Productos/Celta/138.png'
import LogoCelta from '../../../../assets/Productos/Celta/LogoCelta.png'

const Duraconduit = [

    { id: 60, name: "Tubería Duraconduit", image: celta60, secondImage: LogoCelta, secondDescription: [
        {
            title: "Diametro Pulg.", values: ["1/2", "3/4", "1", "1.1/4", "1.1/2", "2"]
        },
        {
            values: ["3", "4"]
        }
    ] },
    {
        id: 59, name: "Union SCH 40", image: celta152,secondImage: LogoCelta, secondDescription: [
            {
                title: "Diametro Pulg.", values: ["1/2", "3/4", "1", "1,1/4", "1.1/2", "2"]
            }
        ]
    },
    {
        id: 200, name: "Adaptador Terminal SCH 40", image: celta153, secondImage: LogoCelta,secondDescription: [
            {
                title: "Diametro Pulg.", values: ["1/2", "3/4", "1", "1.1/4", "1.1/2", "2"]
            }
        ]
    },
    {
        id: 232, name: "Curvas 90-SCH40", image: celta59, secondImage: LogoCelta,secondDescription: [
            {
                title: "Diametro Pulg", values: ["1/2", "3/4", "1", "1.1/4", "1.1/2", "2"]
            }
        ]
    },

];

export default Duraconduit;