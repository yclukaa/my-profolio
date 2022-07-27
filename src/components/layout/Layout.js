import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.page_container}>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
