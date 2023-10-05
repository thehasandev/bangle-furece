import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layouts/Layout";
import SecurityGurdService from "../Pages/SecurityGurdService"
import LadySequrityGurd from "../Pages/LadySequrityGurd";
import Home from "../Pages/Home";
import Protection from "../Pages/Protection";
import Event from "../Pages/Event";
import SequrityIncharge from "../Pages/SequrityIncharge";
import Supervisor from "../Pages/Supervisor";
import CashInTransit from "../Pages/CashInTransit";
import BodyGurd from "../Pages/BodyGurd";
import ArmedSequrityGurd from "../Pages/ArmedSequrityGurd";
import SecurityConsultancy from "../Pages/SecurityConsultancy";
import RoadProtect from "../Pages/RoadProtect";
import SequrityEquipiment from "../Pages/SequrityEquipiment";
import BackgroundScreening from "../Pages/BackgroundScreening";
import Cleanin from "../Pages/Cleanin";
import LadyCleaner from "../Pages/LadyCleaner";
import FloorClean from "../Pages/FloorClean";
import CleaninManger from "../Pages/CleaninManger";
import CleanSupervisor from "../Pages/CleanSupervisor";
import GlassCleaning from "../Pages/GlassCleaning";
import CarpetCleaning from "../Pages/CarpetCleaning";
import WindowCleaning from "../Pages/WindowCleaning";
import SofaClean from "../Pages/SofaClean";
import GardenClean from "../Pages/GardenClean";
import Contract from "../Pages/Contract";
import OurTeam from "../Pages/OurTeam";
import TeamMan from "../Pages/TeamMan";
import About from "../Pages/About";
import Awad from "../Pages/Awad";
import Privacy from "../Pages/Privacy";
import Gallary from "../Pages/Gallary";
import Choose from "../Pages/Choose";
import History from "../Pages/History";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      //all routs hare 
      children: [
            {
              path : "/",
              element:<Home/>
            },
            {
              path : "/security-guard",
              element:<SecurityGurdService/>
            },
            {
              path : "/lady-security-guard",
              element:<LadySequrityGurd/>
            },
            {
              path : "/protection",
              element:<Protection/>
            },
            {
              path : "/event",
              element:<Event/>
            },
            {
              path : "/incharge",
              element:<SequrityIncharge/>
            },
            {
              path : "/supervisor",
              element:<Supervisor/>
            },
            {
              path : "/cash-in-transit",
              element:<CashInTransit/>
            },
            {
              path : "/armed-sequrity-gurd",
              element:<ArmedSequrityGurd/>
            },
            {
              path : "/body-gurd",
              element:<BodyGurd/>
            },
            {
              path : "/security-consultancy",
              element:<SecurityConsultancy/>
            },
            {
              path : "/road-protect",
              element:<RoadProtect/>
            },
            {
              path : "/security-guard-equipments",
              element:<SequrityEquipiment/>
            },
            {
              path : "/background-screening",
              element:<BackgroundScreening/>
            },
            {
              path : "/cleaning",
              element:<Cleanin/>
            },
            {
              path : "/lady-cleaner",
              element:<LadyCleaner/>
            },
            {
              path : "/cleaning-manager",
              element:<CleaninManger/>
            },
            {
              path : "/cleaning-supervisor",
              element:<CleanSupervisor/>
            },
            {
              path : "/floor-clean",
              element:<FloorClean/>
            },
            {
              path : "/glass-clean",
              element:<GlassCleaning/>
            },
            {
              path : "/carpet-clean",
              element:<CarpetCleaning/>
            },
            {
              path : "/window-clean",
              element:<WindowCleaning/>
            },
            {
              path : "/sofa-clean",
              element:<SofaClean/>
            },
            {
              path : "/gardern-clean",
              element:<GardenClean/>
            },
            {
              path : "/contract",
              element:<Contract/>
            },
            {
              path : "/our-team",
              element:<OurTeam/>
            },
            {
              path : "/our-team/:tittle",
              element:<TeamMan/>
            },
            {
              path : "/about",
              element:<About/>
            },
            {
              path : "/awad",
              element:<Awad/>
            },
            {
              path : "/privacy",
              element:<Privacy/>
            },
            {
              path : "/gallary",
              element:<Gallary/>
            },
            {
              path : "/choose",
              element:<Choose/>
            },
            {
              path : "/history",
              element:<History/>
            },

        
      ]
    },
  ]);