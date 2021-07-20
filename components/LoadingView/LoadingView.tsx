import React, { useCallback, useEffect, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView
 } from 'react-native';
 import Colors from '../../constants/Colors';


 export default function LoadingView() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.loading.background}}>
        <Image 
          source={require('../../assets/images_loading/loading_casino.png')}
        />
         <Image 
          source={require('../../assets/images_loading/loading_stratigies.png')}
        />
         <Image 
          source={require('../../assets/images_loading/loading_book.png')}
        />
         <Image 
          source={require('../../assets/images_loading/loading_wlm.png')}
        />
      </View>
    
 }