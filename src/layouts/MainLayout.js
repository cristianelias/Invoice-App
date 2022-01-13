import Header from "../components/Header/Header";

const MainLayout = (props) => (
  <div className="main-layout">
    <Header />
    {props.children}
  </div>
);

export default MainLayout;
