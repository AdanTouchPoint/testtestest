import { fetchData } from './fetchData';
import { colorSetter } from '../helpers/colorSetter';
const fetchColors = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setColors, colors) =>{
  
  const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params);
        const payload = datos.data[0]
        // console.log(payload, 'payload')
        await setColors(payload);
        await colorSetter(colors)
        
        
        
        
        
      
      
  
     
    }
    
export {
  fetchColors
}