import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function Card (props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{ uri:props.livro.capa }} />
    <Text style={{ color: 'black' }}> {props.livro.titulo} </Text>
    <Text style={{ fontSize: 12}}> R$ {props.livro.preco.toString()} </Text>
    </View>
);
}
export default function App() {
  const livros = [
    {
      capa:'https://m.media-amazon.com/images/I/41CXzLy05EL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Livro1',
      preco: 25.00
    },
    {
      capa:'https://m.media-amazon.com/images/I/41CXzLy05EL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Livro2',
      preco: 20.00
    },
    {
      capa:'https://m.media-amazon.com/images/I/41CXzLy05EL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Livro3',
      preco: 15.00
    },
    {
      capa:'https://m.media-amazon.com/images/I/41CXzLy05EL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'Livro4',
      preco: 45.00
    },
  ]
  return (
    <View style={styles.container}>
      <Text style={{ fontSize:25, fontWeight: 'bold'}}>Livraria</Text>
      < View style={styles.conteudo}>
      { livros.map(livro => <Card livro={livro}/> )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#900'
  },

  conteudo: {
    flex: 1,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
    backgroundColor: 'orange',
    width: '40%',
    height: 240,
    borderRadius: 10,
    margin: 15,
  },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
});
