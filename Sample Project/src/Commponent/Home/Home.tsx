import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";
import Lap from "../images/image2.png";
import ser from "../images/image1.png";


interface FAQ {
  question: string;
  answer: string;
}


const faqs: FAQ[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
  {
    question: " Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    question: " Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer: "There are many variations of passages of Lorem Ipsum available."
  }
];

function Home() {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <div className="Home">
        
        
        <div className="Home1">
          <div className="Home2">
            <h1>
              We Crush Your <br />
              Competitors, Goals, And <br />
              Sales Records - Without The B.S.
            </h1>
            <button >
              <b>Get free consultation</b>
            </button>
          </div>
        </div>

        
        <div className="Home3">
          <img src={Lap} alt="Laptop showing app development" />
          <div className="Home4">
            <h1>Web & Mobile App Development</h1>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your business. 
              We use frameworks that tailor content and engagement methods to respond 
              to different intents shown by your potential customers who interact with 
              your business online.
            </p>
            <button >
              <b>LEARN MORE</b>
            </button>
          </div>
        </div>

        
        <div className="Home5">
          <img src={ser} alt="Digital strategy consulting illustration" />
          <div className="Home6">
            <h1>Digital Strategy Consulting</h1>
            <p>
              Your digital strategy should complement the overall marketing strategy 
              of the company. In online marketing, each component will never work in 
              isolation and every business needs a different mix. We provide a clear 
              concept and strategic overview to find the most efficient model for 
              your business.
            </p>
            <button >
              <b>LEARN MORE</b>
            </button>
          </div>
        </div>

        
        <div className="Home7">
          <h1 >Frequently Asked Questions</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="Home8">
              <div
                className="Home9"
                onClick={() => toggleFAQ(index)}
              >
                <span className="s1">{faq.question}</span>
                <span className="s2">{openIndex === index ? "−" : "+"}</span>
                {openIndex === index && <p className="Answer">{faq.answer}</p>}
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
