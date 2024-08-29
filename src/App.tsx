import { Button } from 'primereact/button'
import './App.css'


function App() {

  return (
    <>
      <h1 className='lg:bg-[#0096D6] md:bg-orange-400 sm:bg-green-400 bg-slate-400 px-4 py-8 border-4 border-solid rounded border-black text-white'>Projeto Final 2024</h1>
      <Button icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" iconPos="right" />
      <Button
        label="Like"
        icon="pi pi-hart-fill"
        severity="danger"



      />

    </>



  )
}

export default App
