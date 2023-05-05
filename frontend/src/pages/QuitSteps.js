import React from 'react'
import Accordion  from "../components/miscellaneous/Accordion";  
import QuitNavbar from "../components/miscellaneous/QuitNavbar";

const toChat = ()=>{

}

const QuitSteps = () => {
  return (
    <div className="quit-maindiv">
      <QuitNavbar />
      <div className="quit-title">
        HELP YOURSELF! QUIT SMOKING USING THESE STEPS:
      </div>
      <div className="accord-div" onClick={toChat}>
        <Accordion
          title="Set a quit date:"
          content="Choose a date within the next two weeks to quit smoking. This will give you time to prepare yourself mentally and physically for the journey ahead."
        />
        <Accordion
          title="Make a plan:"
          content="Develop a plan that outlines how you will quit smoking. Some things to consider include: whether you will use nicotine replacement therapy or other medications, how you will manage cravings, and who you can turn to for support."
        />
        <Accordion
          title="Tell your friends and family:"
          content="Let the important people in your life know that you are quitting smoking. This will give you a support system to turn to when you are struggling."
        />
        <Accordion
          title="Remove cigarettes from your environment:"
          content="Get rid of all cigarettes, lighters, and ashtrays in your home, car, and workplace. This will help remove any triggers that may tempt you to smoke."
        />
        <Accordion
          title="Manage your cravings:"
          content="Cravings can be intense when you first quit smoking, but they usually only last a few minutes. Find healthy ways to manage your cravings such as deep breathing, drinking water, or going for a walk."
        />
        <Accordion
          title="Get support:"
          content="Join a quit-smoking program, talk to your doctor, or find a support group. Having someone to talk to who understands what you're going through can make all the difference."
        />
        <Accordion
          title="Stay positive:"
          content="Remember that quitting smoking is a process, and it's normal to have setbacks along the way. Don't beat yourself up if you slip up, just get back on track and keep moving forward."
        />
        />
      </div>
    </div>
  );
}

export default QuitSteps