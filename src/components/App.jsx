import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componentes 
import Navbar from './Navbar/Navbar';
import ItemListCointainer from './itemListContainer/ItemListCointainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

const App = () => {


    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListCointainer />}/>
                    <Route path='/product/:id' element={<ItemDetailContainer/>}/>
                    <Route path='/Categorias/:Categorias' element={<ItemDetailContainer/>}/>
                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;
