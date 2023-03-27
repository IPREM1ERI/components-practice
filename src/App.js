import Accordion from "./components/Accordion";



function App() {
  const items = [
    {
      id: 'fasdjhfa',
      label: "Can I use React",
      content: "Yes you can my guy"
    },
    {
      id: 'fasasafdjhfa',
      label: "Can I use React",
      content: "Yes you can my dude"
    },
    {
      id: 'fasdjhfsdfa',
      label: "Can I use React",
      content: "Yes you can my G"
    },
  ]
  return <Accordion items={items} />
    
  
}

export default App;
