import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

/**
 * Sets up the basic layout of the web page. 
 */

function Layout(props) {
  return(
  <div>
    <MainNavigation />
    <main className = {classes.main}> {props.children} </main>
  </div>);
}

export default Layout;
