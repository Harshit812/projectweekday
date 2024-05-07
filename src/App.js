import { React } from 'react';
import './App.css';
import FilterHeader from './components/filterHeader/filterHeader';
import ShowJobDetails from './components/showJobDetails/showJobDetails';

const App = () => {
  return (
    <div>
      <FilterHeader />
      <ShowJobDetails />
    </div>
  );
};

export default App;