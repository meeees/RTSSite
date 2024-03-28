
import { Intent, Spinner, Button, OverlaysProvider, Dialog } from "@blueprintjs/core"
import { useState } from "react";


function Kyle() {

  const [isOpen, setOpen] = useState(false);

  return (
    <OverlaysProvider>
    <div>
    <h1>Building Website</h1>
    <Spinner intent={Intent.DANGER} size={200} />
    <br/>
    <Button text="Where Website?" onClick={() => setOpen(true)} large={true}/>
    <Dialog isOpen={isOpen} onClose={() => setOpen(false)}>
      <h1>NOT BUILD YET!</h1>
    </Dialog>
    </div>
    </OverlaysProvider>
  )
}

export default Kyle