import './style.css'
import { motion } from 'framer-motion';

const Skills = () => {
    return(
        
   <motion.div 
   
   initial={{width : 0}}
    animate={{width :'100%'}}
    exit={{ x:window.innerWidth,transition:{duration: .1} }}
   
   className="skills">
    <h1>Skills</h1>
    <div className="content">
      <div>
        <strong>Languages:</strong>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>Node.js</li>
        <li>JavaScript</li>
      </div>
      <div>
        <strong>Libraries:</strong>
        <li>Bootstrap</li>
        <li>Express.js</li>
        <li>Material-ui</li>
        <li>React.js</li>
      </div>
      <div>
        <strong>Tools:</strong>
        <li>Eslint</li>
        <li>Webpack</li>
        <li>Chrome Dev</li>
        <li>Git & Github</li>
      </div>
      <div>
        <strong>Uint Test:</strong>
        <li>Jest</li>
        <li>Enzyme</li>
        <li>React-test</li>
        <li>SupperTest</li>
      </div>
    </div>
  </motion.div>
);
}

export default Skills