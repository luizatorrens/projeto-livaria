import * as React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';


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
      id: 1,
      capa:'https://m.media-amazon.com/images/I/51SnGLrrJcL._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e a Câmara Secreta',
      preco: 25.00
    },
    {
      id: 2,
      capa:'https://m.media-amazon.com/images/I/41CXzLy05EL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'A Culpa é das Estrelas',
      preco: 20.00
    },
    {
      id: 3,
      capa:'https://cdn.30porcento.com.br/capas/9785469082811.jpg',
      titulo: 'The Witcher',
      preco: 15.00
    },
    {
      id: 4,
      capa:'https://imagens.disal.com.br/produtos/ampliada/5286190.jpg',
      titulo: 'A Herdeira',
      preco: 44.00
    },
    {
      id: 5,
      capa:'https://m.media-amazon.com/images/I/51SnGLrrJcL._SX346_BO1,204,203,200_.jpg',
      titulo: 'Harry Potter e a Câmara Secreta',
      preco: 25.00
    },
    {
      id: 6,
      capa:'https://m.media-amazon.com/images/I/41CXzLy05EL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
      titulo: 'A Culpa é das Estrelas',
      preco: 20.00
    },
    {
      id: 7,
      capa:'https://cdn.30porcento.com.br/capas/9785469082811.jpg',
      titulo: 'The Witcher',
      preco: 15.00
    },
    {
      id: 8,
      capa:'https://imagens.disal.com.br/produtos/ampliada/5286190.jpg',
      titulo: 'A Herdeira',
      preco: 44.00
    },
    
  ]
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize:25, fontWeight: 'bold'}}>Livraria</Text>
        < View style={styles.conteudo}>
          { livros.map(livro => <Card livro={livro} key={livro.id}/> )}
        </View>
      </View>
    </ScrollView>
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
    width: '100%'
  },
  card: {
    backgroundColor: 'white',
    width: '40%',
    padding: 10,
    height: 260,
    borderRadius: 10,
    margin: 15,
  },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  },
});
