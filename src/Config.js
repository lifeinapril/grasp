

import about1 from "./images/about1.jpeg";
import about4 from "./images/about4.jpeg";
import about2 from "./images/about2.jpeg";
import about3 from "./images/about3.jpeg";



import jumbo1 from "./images/fama.jpeg";
import jumbo2 from "./images/fama8.jpeg";

import appicon from "./logo.png";
import maya_studio from "./App.json";

maya_studio.icon=appicon;
maya_studio.jumbos=[jumbo1,jumbo2];




maya_studio.about[0].image=about1;
maya_studio.about[1].image=about2;
maya_studio.about[2].image=about3;
maya_studio.about[3].image=about4;

export default maya_studio;
