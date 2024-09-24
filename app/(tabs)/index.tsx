import { Image, StyleSheet, Platform, View, TouchableOpacity, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: "black", flex: 1}}>
      <View style={{margin: 10, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <View style={{
            height: 30, 
            width: 30, 
            borderRadius: 20, 
            backgroundColor: "#262626", 
            justifyContent: "center", 
            alignItems: "center"
          }}>
            <Text style={{color: "white", fontWeight: "bold", textAlign: 'center'}}>...</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={{
            height: 30, 
            width: 30, 
            borderRadius: 20, 
            backgroundColor: "#262626", 
            justifyContent: "center", 
            alignItems: "center", 
            marginEnd: 5
          }}>
            <Ionicons name='camera' color={"white"} size={16}/>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={{
            height: 30, 
            width: 30, 
            borderRadius: 20, 
            backgroundColor: "#262626", 
            justifyContent: "center", 
            alignItems: "center"
          }}>
            <Ionicons name='settings' color={"white"} size={16}/>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{margin: 10}}>
        <Text style={{color: "white", fontSize: 30, fontWeight: "bold"}}>Chats</Text>
      </View>

      <View style={{flex: 1, backgroundColor: "#262626", borderRadius: 10, margin: 10}}>
        {/* Aquí puedes colocar el contenido adicional */}
      </View>
    </View>

  );
}
