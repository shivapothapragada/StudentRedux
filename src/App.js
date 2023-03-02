
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Delete from './components/Delete';
import Edit from './components/Edit';
import Register from './components/Register';
import ViewAll from './components/ViewAll';
import ViewBy from './components/ViewBy';
// import Register from './components/Register';

import store from './store/Store';

function App() {
  return (
    <Provider store={store}>
      {/* <Register/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<Register />} />
          <Route path='/' exact element={<ViewAll />} />
          <Route path='/viewby' element={<ViewBy />} />
          {/* <Route path='/delete' element={<Delete />} /> */}
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
