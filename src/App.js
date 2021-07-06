import './App.css';

function App() {
  let dataFonts = [{
    name: "alarm", 
    icon_class: "bi bi-alarm", 
    en:"alarm clock",
    es:"despertador"
  }, {
    name: "basket", 
    icon_class: "bi bi-basket", 
    en:"basket",
    es:"canasta"
  }, 
  {
    name: "At Symbol", 
    icon_class: "bi bi-at", 
    en:"at symbol",
    es:"arroba"
  },
  {
    name: "bag", 
    icon_class: "bi bi-bag", 
    en:"bag",
    es:"bolsa"
  },
  {
    name: "bank", 
    icon_class: "bi bi-bank", 
    en:"bank",
    es:"banco"
  },
  {
    name: "Padlock", 
    icon_class: "bi bi-lock", 
    en:"Padlock",
    es:"Candado"
  },
  {
    name: "bell", 
    icon_class: "bi bi-bell", 
    en:"bell",
    es:"campana"
  },
  {
    name: "battery", 
    icon_class: "bi bi-battery", 
    en:"battery",
    es:"batería"
  },
  {
    name: "Umbrella", 
    icon_class: "bi bi-umbrella", 
    en:"Umbrella",
    es:"Paraguas"
  },
  {
    name: "bicycle", 
    icon_class: "bi bi-bicycle", 
    en:"bicycle",
    es:"bicicleta"
  },
  {
    name: "binoculars", 
    icon_class: "bi bi-binoculars", 
    en:"binoculars",
    es:"prismáticos"
  },
  {
    name: "book", 
    icon_class: "bi bi-book", 
    en:"book",
    es:"libro"
  },
  {
    name: "water", 
    icon_class: "bi bi-water", 
    en:"water",
    es:"Agua"
  },
  {
    name: "Watch", 
    icon_class: "bi bi-watch", 
    en:"Watch",
    es:"Reloj"
  },
  {
    name: "bucket", 
    icon_class: "bi bi-bucket", 
    en:"bucket",
    es:"Cubeta"
  },
  {
    name: "calculator", 
    icon_class: "bi bi-calculator", 
    en:"calculator",
    es:"calculadora"
  },
  
  {
    name: "cloud", 
    icon_class: "bi bi-cloud", 
    en:"cloud",
    es:"nube"
  },
  {
    name: "cup", 
    icon_class: "bi bi-cup", 
    en:"cup",
    es:"taza"
  },
  {
    name: "Wind", 
    icon_class: "bi bi-wind", 
    en:"Wind",
    es:"Viento"
  },
  {
    name: "flower", 
    icon_class: "bi bi-flower1", 
    en:"flower",
    es:"flor"
  }];
  

  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          <h1>Flash Cards</h1>
          <h5>Hover over a card to review the Spanish</h5>
          <h5>name once you believe you know what it is.</h5>
          <ul className="rows">
            {  dataFonts.map((item, index) => (
                  <li key={index}> 
                      <div className="card-front">
                        <i className={item.icon_class}></i>
                      </div>
                      <div className="card-back">
                        {item.es} 
                      </div>
                  </li>
                ))
            }

          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;
