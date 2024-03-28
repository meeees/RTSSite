import { Alignment, Button, Navbar } from "@blueprintjs/core"
import { Link } from "react-router-dom"

function RTSNav() {


  return (
  <>
  <Navbar fixedToTop={true}>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading >The Dwarves</Navbar.Heading>
      <Navbar.Divider/>
        <Link to="/">
          <Button className="bp5-minimal" icon="home" text="Home"/>
        </Link>
        <Link to="players">
          <Button className="bp5-minimal" icon="person" text="Players"/>
        </Link>
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Button className="bp5-minimal" icon="log-out" />
    </Navbar.Group>
  </Navbar>
  </>)
}

export default RTSNav