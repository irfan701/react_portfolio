import TopBanner from "./components/TopBanner.jsx";
import Services from "./components/Services.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import Analysis from "./components/Analysis.jsx";
import Summary from "./components/Summary.jsx";
import RecentProjects from "./components/RecentProjects.jsx";

function App() {

    return (
        <>
            <TopNavbar/>
            <TopBanner/>
            <Services/>
            <Analysis/>
            <Summary/>
            <RecentProjects/>
        </>
    )
}

export default App
