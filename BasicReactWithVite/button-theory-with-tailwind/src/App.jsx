import Button from './components/Button'
import './App.css'
import { TiTick } from "react-icons/ti";
import { IoIosWarning } from "react-icons/io";
import { MdDangerous } from "react-icons/md";

function App() {

  const handleClick = ()=>{
    console.log('Clicked');
  }

  return (
    <>
     <Button success onClick={handleClick}><TiTick className='mr-1'/>Success</Button>
     <Button warning> <IoIosWarning className='mr-1'/> Warning</Button>
     <Button danger><MdDangerous className='mr-1'/>Danger</Button>
     <Button primary>Primary</Button>
     <Button secondary>Secondary</Button>
     <Button outline>Outline</Button>
     <Button rounded>Rounded</Button>
     <Button success outline><TiTick className='mr-1'/>Success</Button>
     <Button success rounded><TiTick className='mr-1'/>Success</Button>
     <Button success rounded outline><TiTick className='mr-1'/>Success</Button>
     <Button warning outline> <IoIosWarning className='mr-1'/>Warning</Button>
     <Button warning rounded> <IoIosWarning className='mr-1'/>Warning</Button>
     <Button warning outline rounded><IoIosWarning className='mr-1'/>Warning</Button>
     <Button danger rounded><MdDangerous className='mr-1'/>Danger</Button>
     <Button danger outline><MdDangerous className='mr-1'/>Danger</Button>
     <Button danger rounded outline><MdDangerous className='mr-1'/>Danger</Button>
     <Button primary outline>Primary</Button>
     <Button primary rounded>Primary</Button>
     <Button primary rounded outline>Primary</Button>
     <Button secondary outline>Secondary</Button>
     <Button secondary rounded>Secondary</Button>
     <Button secondary outline rounded>Secondary</Button>
     
    </>
  )
}

export default App
