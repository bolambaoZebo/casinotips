import *  as React from 'react';
import { View, Text} from '../components/Themed';
import {Image,Dimensions} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import Colors from '../constants/Colors';

export default function DetailScreen({route, navigation}){
    const { itemId, otherParam, imageParam } = route.params;
    return (<View style={{flex: 1, backgroundColor: '#454545', paddingTop: 30}}>
         <ScrollView >
         <View style={{flexDirection: 'row', padding: 5, backgroundColor: '#454545', }}>
             <Entypo 
             name="back" 
             size={32} 
             onPress={()=>navigation.navigate('Root')}
             style={{color: 'white'}}/>
             <Text style={{paddingLeft: 15, fontWeight: '700' , fontSize: 20, color: Colors.text_yellow.color,}}>{itemId}</Text>
         </View>
         <Image
            style={{
                resizeMode: 'cover',
                height: 250,
                width: width,
            }}
            source={imageParam}
         />
         <Text style={{
             padding: 8, 
             color: '#ebdab4', 
             textAlign: 'auto',
             fontSize: 18}}>{otherParam}</Text>
         </ScrollView>
    </View>);
}