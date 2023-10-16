import TopBanner from "./components/TopBanner.jsx";
import Services from "./components/Services.jsx";
import TopNavbar from "./components/TopNavbar.jsx";
import Analysis from "./components/Analysis.jsx";
import Summary from "./components/Summary.jsx";
import RecentProjects from "./components/RecentProjects.jsx";
import Courses from "./components/Courses.jsx";
import Video from "./components/Video.jsx";
import ClientReview from "./components/ClientReview.jsx";
import Footer from "./components/Footer.jsx";

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
            <Video/>
            <ClientReview/>
            <Footer/>
        </>
    )
}

export default App
