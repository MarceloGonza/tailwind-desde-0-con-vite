import Button from "./componenetes/Button/Button";

function saludar() {
  alert("Hola, soy un botón");
}

function App() {
  return (
    <div className="flex items-center justify-center w-screen flex-col">
      <p className="text-blue-500">Hello Tailwind</p>
      <Button onClick={saludar}>Soy un boton</Button>
      <Button className="bg-red-500 hover:bg-red-700 active:bg-red-900">
        Suscríbite
      </Button>
      <Button className="bg-green-500 hover:bg-green-700 active:bg-green-900">
        Comprar
      </Button>
    </div>
  );
}

export default App;
