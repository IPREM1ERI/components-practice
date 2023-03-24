import Button from "./Button";
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

function App() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell className="mr-1"/>
          Push Me!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Press Me!!
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoDatabase />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button warning >Dont Push Me!!</Button>
      </div>
      <div>
        <Button danger outline >Dont Press Me!!</Button>
      </div>
    </div>
  );
}

export default App;
