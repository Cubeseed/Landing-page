import React from 'react';
import styles from "./team.module.scss"
import Image from 'next/image';
import leftLeaves from "../../icons/left-leaves.svg"
import rightLeaves from "../../icons/right-leaves.svg"
import Mbafeno from "../../team-images/Mbanefo.svg"
import Chetana from "../../team-images/Chetana.svg"
import Roger from "../../team-images/Roger.svg"
import Precious from "../../team-images/Precious.svg"
import Salawat from "../../team-images/Salawat.svg"
import Alexandra from "../../team-images/Alexandra.svg"
import Indraja from "../../team-images/Indraja.svg"
import Shivangi from "../../team-images/Shivangi.svg"
import Shuaixin from "../../team-images/Shuaixin.svg"
import Sebastian from "../../team-images/Sebastian.svg"
import Zsoldos from "../../team-images/Zsoldos.png"
import Elias from "../../team-images/Elias.svg"



const Team: React.FC = () => {
 

  return (
<div>
<div className={styles.main_header}>
    <div className={styles.header_container}>
    <div className={styles.left_leaves} >
    <div  className={styles.header_title}>
    <h3>Team</h3> 
    <p>Cubeseed is a team of highly experienced experts from diverse backgrounds and industries who are committed to improving the deteriorating state of the agricultural ecosystem in Africa.</p>
    </div>
    </div>
    </div>
    <div className={styles.right_leaves}>
    <Image src={rightLeaves} alt='leaves'/>     
    </div>   
</div>
<div className={styles.team_main_container}>
<div className={styles.team_container_left}> 
    <div className={styles.team_founder}>
        <Image src={Mbafeno} alt='founder'/>
        <h4>Mbanefo Chinaza C.</h4>
        <p>Founder: Cubeseed | McAgric | FindmoreNg Experience: Agriculture and Retail management</p>
    </div>
    <div className={styles.lead_project}>
        <Image src={Roger} alt='team-lead'/>
        <h4>Roger Satis</h4>
        <p>Team-lead Software developer</p>
    </div>
    <div className={styles.lead_project}>
        <Image src={Chetana} alt='lead-project'/>
            <h4>Chethana Jaiswal</h4>
            <p>Lead Project/Product Manager
            Experience: Tech PM -Payment products</p>
    </div>
    <div className={styles.team_lead}>
        <Image src={Shuaixin} alt='software-developer'/>
            <h4>Shuaixin Li</h4>
            <p>Software Developer</p>
    </div>
</div>

<div className={styles.team_container_right}> 
    <div className={styles.team_lead}>
        <Image src={Precious} alt='product-manager'/>
            <h4>Precious Adedeji</h4>
            <p>Product Manager</p>
    </div>
    <div className={styles.team_lead}>
        <Image src={Salawat} alt='product-manager'/>
            <h4>Salawat Lawal</h4>
            <p>Product Manager</p>
    </div>
    <div className={styles.team_lead}>
        <Image src={Alexandra} alt='QA tester'/>
            <h4>Alexandra Fiddes</h4>
            <p>QA Tester</p>
    </div>
    <div className={styles.team_software}>
        <Image src={Zsoldos} alt='software-developer'/>
            <h4>Zsoldos Flaviu</h4>
            <p>Software Developer</p>
    </div>
</div>
<div className={styles.team_container_left}> 
    <div className={styles.team_lead}>
        <Image src={Indraja} alt='UI-UX'/>
        <h4>Indraja.Siripuram</h4>
        <p>UI/UX Designer</p>
    </div>
    <div className={styles.team_lead}>
        <Image src={Shivangi} alt='UI-UX'/>
            <h4>Shivangi Guptha</h4>
            <p>UI/UX Designer</p>
    </div>
    <div className={styles.team_lead}>
        <Image src={Elias} alt='UI-UX'/>
            <h4>Elias de Garay</h4>
            <p>UI/UX Designer</p>
    </div>
    <div className={styles.team_lead}>
        <Image src={Sebastian} alt='software-developer'/>
            <h4>Sebastián García Helguera</h4>
            <p>Software Developer</p>
    </div>
</div>


</div>



</div>   
 
      
  );
};

export default Team;