import Footer from "../components/Footer";
import Header from "../components/Header";
import Questionary from "../components/Questionary";


function Layout({children}) {
    return ( 
        <>
        <Header></Header>
        {children}
        <Questionary></Questionary>
        <Footer></Footer>
        </>
     );

}

export default Layout;
