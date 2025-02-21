
import './App.css'
import Accordion from './components/Accordion';


function App() {


  const items = [
    {
      id : 1,
      label : 'Can i use React on a project?',
      content : 'Yes you can use react on any project'
    },
    {
      id : 2,
      label : 'Can i use Javascript on a project?',
      content : 'Yes you can use Javascript on any project'
    },
    {
      id : 3,
      label : 'Can i use CSS on a project?',
      content : 'Yes you can use CSS on any project'
    },
    {
      id : 4,
      label : 'Can i use classnames lib on a project?',
      content : 'Yes you can use classnames lib on any project'
    },
  ];

  return (
    <>
     <Accordion items={items}/>
    </>
  )
}

export default App
