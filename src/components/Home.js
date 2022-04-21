import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const Home = () => {
  return (
    <motion.div
    
   initial={{width : 0}}
   animate={{width :'100%'}}
   exit={{ x:window.innerWidth,transition:{duration: .1} }}
   

    className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Mohammed</p>
          <p>Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/profile_pic.jpg`}
          alt="person picture"
        />
      </div>
    </motion.div>
  );
};

export default Home;