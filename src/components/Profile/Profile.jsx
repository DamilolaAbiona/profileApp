import React from 'react'
import styles from "./Profile.module.css"
import {AiOutlineTwitter,
        AiFillInstagram,
        AiFillLinkedin
     } from "react-icons/ai"
import Card from '../UI/Card/Card'

const profile = ({image, name, job, company, link, twitterLink, linkendin, Ig}) => {
  return (
  <Card>
    <div>
     <img src = {image} alt="Adora" />
     <div className={styles["profile-content"]}>
    <h3>My profile</h3>
    <div className={styles.text}>
      <p>Name:</p>
      <p>{name}</p>
    </div>
    <div className={styles.text}>
      <p>Job:</p>
      <p className= {styles.cloud}>{job}</p>
    </div>
    <div className={styles.text}>
      <p>Company:</p>
      <p>{company}</p>
    </div>
    <div className={styles.icon}>
      <a href={twitterLink}><AiOutlineTwitter    color='blue'   /></a>
      <a href={Ig}><AiFillInstagram color='purple' /></a>
      <a href={linkendin}><AiFillLinkedin  color='blue' /></a>
    </div>
    <div className={styles.btn}>
      <a href={link} target="_blank" rel='nonreffer'>View Profile</a>
    </div>
     </div>
    </div>
    </Card>
  )
}

export default profile
