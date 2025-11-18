import { TouchableOpacity,View, Text, Modal, StatusBar} from "react-native";
import { global } from "./styles";

function handleOnPress(){
    // setOpen(!open);
}


const DatePicker = () => {
    return(
        <View>    
            <TouchableOpacity onPress={handleOnPress}>
                <Text>Open</Text>
            </TouchableOpacity>
            
            <Modal
            animationType="slide"
            transparent={true}
            visible={open}>

                <TouchableOpacity onPress={handleOnPress}>
                <Text>Open</Text>

            </TouchableOpacity>
                <StatusBar/>
            </Modal>
        </View>
    )
}