import {Container} from './components/styled/Container.styled';
import Header from './components/Header.js';
import Card from './components/Card';
import Footer from './components/Footer';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './components/styled/Global';
import content from './content';

const theme = {
  colors: {
    body: '#0c164f',
    header: '#5643fd',
    extra: '#f5f5f5',
    footer: '#0c164f',
  },
  mobile: '768px',
}


function App() {
  return (

    <div>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <Header />
    <Container>
      {content.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </Container>
    <Footer />
    </ThemeProvider>
    </div>
  );
}

export default App;
