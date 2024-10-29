import boqui1 from '../../../../assets/Productos/Impadoc/Boquilla2k.png'
import boqui2 from '../../../../assets/Productos/Impadoc/Boquilla5k.png'
import boqui3 from '../../../../assets/Productos/Argos/boquilla.png'
import { FaCircle } from 'react-icons/fa';


const boquillas = [

    {id: 1, name: "Boquilla Concolor 2kg", image: boqui1, description:(
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        Colores =
        <FaCircle style={{ color: 'white', fontSize: '30px', border: '1px solid black', borderRadius: '50%' }} />
        <FaCircle style={{ color: 'grey', fontSize: '30px', border: '1px solid black', borderRadius: '50%' }} />
        <FaCircle style={{ color: '#7A4E33', fontSize: '30px', border: '1px solid black', borderRadius: '50%' }} />
      </span>
      )},
    {id: 2, name: "Boquilla Concolor 5kg", image: boqui2, description:(
      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      Colores =
      <FaCircle style={{ color: 'white', fontSize: '30px', border: '1px solid black', borderRadius: '50%' }} />
      <FaCircle style={{ color: '#E8DA9D', fontSize: '30px', border: '1px solid black', borderRadius: '50%' }} />
      <FaCircle style={{ color: '#B37E4C', fontSize: '30px', border: '1px solid black', borderRadius: '50%' }} />
    </span>
    )}, 
    {id: 3, name: "Boquilla Argos 2kg", image: boqui3, description:"" },
];

export default boquillas;