import { Outlet, createBrowserRouter } from "react-router-dom";
// import Kyle from "../Kyle";
import Player from "../players/Player";
import RTSNav from "./Navbar";
import Ladder from "../players/Ladder";
import PlayerStats from "../players/Stats";
import Kyle from "../Kyle";

export const router = createBrowserRouter([
  {
  path: '/',
  element: <><RTSNav /><Outlet/></>,
  children:[
  {
    path: '/',
    element: <Kyle />,
  },
  {
    path: 'players',
    element: <Player />,
  },
  {
    path: 'ladder',
    element: <Ladder />
  },
  {
    path: 'stats',
    element: <PlayerStats />
  }
  ]
}
],
{ basename: '/RTSSite' }
); 