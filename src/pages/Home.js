import Navigation from "../components/Navigation";
import '../components/Navigation.css'
import './Home.css'
import Card from "./Card";
import img from '../images/home-img.png'
import img1 from '../images/card/img-1.png'
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navigation />
      <main>
        <div className="container">
          <div className="info-wraper">
            <div className="textbox">
              <h5>მზად ხარ სწავლისთვის?</h5>
              <h1>ისწავლე ღიმილით <span>ნებისმიერ დროს</span></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa vitae blanditiis dignissimos nisi assumenda mollitia doloremque, odit veritatis eum qui debitis vel ad quia laborum consequuntur deleniti facilis voluptas. Atque.</p>
              <a href="/registration"><button>დაიწყე</button></a>
            </div>
            <div><img src={img} alt="college" /></div>
          </div>
          <div className="cards">
            <Card image={img1} type="მარკეტინგი" name="ADVERTISING & ANALYTICS" place="Digital Bus • Academy" price="400.00"/>
            <Card image={img1} type="მარკეტინგი" name="ADVERTISING & ANALYTICS" place="Digital Bus • Academy" price="400.00"/>
             <Card image={img1} type="მარკეტინგი" name="ADVERTISING & ANALYTICS" place="Digital Bus • Academy" price="400.00"/>
             <Card image={img1} type="მარკეტინგი" name="ADVERTISING & ANALYTICS" place="Digital Bus • Academy" price="400.00"/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;