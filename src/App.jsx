import TopBanner from "./components/TopBanner.jsx";
import Services from "./components/Services.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import Analysis from "./components/Analysis.jsx";
import Summary from "./components/Summary.jsx";
import RecentProjects from "./components/RecentProjects.jsx";
import Courses from "./components/Courses.jsx";

function App() {

    return (
        <>
            <TopNavbar/>
            <TopBanner/>
            <Services/>
            <Analysis/>
            <Summary/>
            <RecentProjects/>
            <Courses/>
        </>
    )
}

export default App
