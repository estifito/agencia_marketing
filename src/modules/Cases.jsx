import CaseList from "componets/cases/CaseList";
import Header from "componets/cases/Header";
import Footer from "componets/navigation/Footer";
import Navbar from "componets/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

const Cases = () => {
  return (
    <Layout>
      <Navbar />
          <Header />
          <CaseList/>
      <Footer />
    </Layout>
  );
};

export default Cases;
