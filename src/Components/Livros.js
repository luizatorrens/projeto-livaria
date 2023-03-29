import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'  
import { AntDesign } from '@expo/vector-icons';

const Livro = ({ livro, onRemove }) => {

    return (
      <View style={styles.card}>
        <Image style={styles.livro} source={{ uri:livro.capa }} />
        <Text style={{ color: 'black' }}> {livro.titulo} </Text>
        <Text style={{ fontSize: 15}}> R$ {livro.preco.toString()} </Text>
        <TouchableOpacity onPress={onRemove}>
        <AntDesign style={styles.delete} name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      
  );
  } 
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      width: '40%',
      padding: 10,
      height: 300,
      borderRadius: 10,
      margin: 15,
    },
    livro: {
      resizeMode: 'stretch',
      width: '100%',
      height: 200,
    },
    delete: {
      paddingTop: 5,
      alignItems: 'center',
    },
  })

export default Livro;