import RenderExplorer from '@/src/components/explorer';
import RenderDatePicker from '@/src/components/ui/DatePicker';
import { View } from 'react-native';

const Explorer = () => {
  return (
    <View>
        
        <RenderExplorer/>
        <RenderDatePicker/>

    </View>
  )
}  
export default Explorer;