import React, { Component } from "react";
import Link from "gatsby-link";

import Opening1 from "../components/fourfoureight/Opening1";
import Opening2 from "../components/fourfoureight/Opening2";
import Opening3 from "../components/fourfoureight/Opening3";
import Abstraction from "../components/fourfoureight/Abstraction";
import Letter from "../components/fourfoureight/Letter";

import fourfoureight1 from "../assets/images/fourfoureight/fourfoureight-1.jpg";

const FourFourEight = () => (
  <div>
    <div className="wrap-448">
      <Link to="/#projects">Back to projects</Link>
      <h1>Projections for <em>4.48 Psychosis</em></h1>
      <p>By: Dylan Stratton</p>
      <div className="intro-448">
        <p>Content Warning: depression, suicidality, self-harm</p>
        <p><em>4.48 Psychosis</em> by Sarah Kane is a brutal and damning account of the inside of a mind battling depression and the medical industry that treats the illness. First performed in June of 2000 in London, <em>4.48</em> ruptured theatrical conventions of mental health on stage and continues to disrupt the cautious conversations about art and mental health.</p>
        <p>The production of <em>4.48</em> at the Phoenix Theater in Minneapolis in the Fall of 2017 attempted to share what Kane sought after. Connor Stratton, the director, wrote in the director's note that "what emerges from 4.48 Psychosis is a failed or thwarted desire to be understood, cared for, and loved". The play opens in the interior of such a mind, raising the question: What does it look like, feel like, and sound like to be inside someone else's brain? </p>
        <p>One strategy to answering this question was the use of projections. The play's lack of designated characters and stage directions lends itself to a stage complemented by a white screen - sometimes dancing, sometimes flickering, sometimes darkened.</p>
        <img src={fourfoureight1} alt="4.48 Production shot" />
      </div>

      <Opening1 />
      <hr />
      <Opening2 />
      <hr />
      <Opening3 />
      <hr />
      <Abstraction />
      <hr />
      <Letter />

      <Link to="/#projects">Back to projects</Link>
    </div>
  </div>
);

export default FourFourEight;
