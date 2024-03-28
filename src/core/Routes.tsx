import { Outlet, createBrowserRouter } from "react-router-dom";
import Kyle from "../Kyle";
import Player from "../players/Player";
import RTSNav from "./Navbar";

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
  ]
}
],
{ basename: '/RTSSite' }
); 