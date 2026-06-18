import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon />}
        variant="primary"
        text="Share"
        size="sm"
      />
      <Button variant="secondary" text="Add content" size="md" />
      <Button variant="secondary" text="Add content" size="lg" />
      <p className="bg-purple-600">hello</p>
    </>
  );
}

export default App;
