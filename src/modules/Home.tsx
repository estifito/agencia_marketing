import BlogList from "componets/home/BlogList";
import Cta from "componets/home/Cta";
import Features from "componets/home/Features";
import Header from "componets/home/Header";
import Incentives from "componets/home/Incentives";
import LogoCloud from "componets/home/LogoCloud";
import UseCases from "componets/home/UseCases";
import Footer from "componets/navigation/Footer";
import Navbar from "componets/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Header />
      <Incentives />
      <UseCases />
      <Features />
      <Cta />
      <LogoCloud />
      <BlogList />
      <Footer />
    </Layout>
  );
};

export default Home;
