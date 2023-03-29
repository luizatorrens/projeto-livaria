import React, { useState } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Livros from './src/Components/Livros'

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

const ListaLivros = () => {
  const [livrosList, setLivrosList] = useState(livros);
  
  const handleRemove = (index) => {
    const newLivrosList = [...livrosList];
    newLivrosList.splice(index, 1);
    setLivrosList(newLivrosList);
  };

return (
  <ScrollView style={styles.scroll}>
      <View style={styles.conteudo}>
        {livrosList.map((livro, index) => (
          <Livros key={index} livro={livro} onRemove={() => handleRemove(index)} />
        ))}
      </View>
    </ScrollView>
  );
};

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.nome}>Livraria</Text>
        < View style={styles.conteudo}>
          <ListaLivros />
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
  nome: {
    fontSize: 32,
    padding: 10,
    color: 'white',
    textAlign: 'center',
  }
});
