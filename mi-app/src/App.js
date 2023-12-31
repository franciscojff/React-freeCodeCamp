import './App.css';
import {Testimonio} from './components/Testimonio';
//Exportacion nombrada, solo exporta una de las funciones del componente, por defecto exporta todo
function App() {
  return (
    <div className="App">
    <div className='contenedor-principal'>
    <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
    <Testimonio
    nombre = 'Shawn Wang'
    pais = 'Singapur'
    imagen = 'shawn'
    cargo = 'Ingeniero de Software'
    empresa = 'Uber'
    testimonio = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'    
    />
    <Testimonio
    nombre = 'Sarah Waallys'
    pais = 'Nigeria'
    imagen = 'sarah'
    cargo = 'Ingeniera de Software'
    empresa = 'Chatdesk'
    testimonio = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'    
    />        
    <Testimonio
    nombre = 'Enma Bostian'
    pais = ' Suecia'
    imagen = 'emma'
    cargo = 'Ingeniera de Software'
    empresa = 'Spotify'
    testimonio = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,'
    />
    </div>
    </div>
  );
}

export default App;
