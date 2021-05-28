
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './components/Header/Header';
import TopHeadLine from './TopHeadLine/TopHeadLine';
import Fragment from './Fragment/Fragment'


function App() {
  return (
    <div>
      <h1>React Bootstrap</h1>
      <Button variant="secondary">Secondary</Button>{' '}
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadLine></TopHeadLine>

    </div>
  );
}

export default App;
