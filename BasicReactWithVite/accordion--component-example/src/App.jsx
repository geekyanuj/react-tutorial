import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can i use React on a project?",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam doloribus, similique repudiandae repellendus ab accusamus excepturi, dolores vero nam iusto exercitationem ea, totam porro quas consequatur! Exercitationem nisi necessitatibus atque.",
    },
    {
      id: 2,
      label: "Can i use Javascript on a project?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat alias excepturi incidunt impedit ipsam aut quidem provident! Quibusdam accusamus odio quasi delectus! Dicta vero facere sequi a quisquam natus ipsum voluptates?",
    },
    {
      id: 3,
      label: "Can i use CSS on a project?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloremque autem laborum aliquid dolorum fugit repellendus assumenda tenetur. Maiores impedit veritatis quae, magni magnam quis saepe quia quibusdam harum soluta.",
    },
    {
      id: 4,
      label: "Can i use classnames lib on a project?",
      content: "Yes you can use classnames lib on any project",
    },
  ];

  return (
    <div className="">
      <h2 className="">Accordion Example</h2>
      <div className="border m-1 p-5 w-200 content-center shadow-2xs rounded ">
        
        <Accordion items={items} />
      </div>
    </div>
  );
}

export default App;
