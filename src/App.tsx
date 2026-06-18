import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon size="lg" />}
        size="md"
        variant="primary"
        text="Hello"
        onClick={() => {}}
        endIcon={<ShareIcon size="lg"/>}
      />
    </>
  );
}

export default App;
