import ProfileImage from '../Components/Images/profile.png'; 
import Notification from '../Components/Notification';  //added thissss
import CollapsibleCard from '../Components/CollapsibleCard';

import React, { useState } from 'react';

import ExpandableCard from '../Components/ExpandableCard'

const Test = () => {
    return (

      <CollapsibleCard
        dayNumber="1"
        imagePath="../landscape.jpeg" 
        text="This is the detailed description for Day 1."
      />
    );
  };
  
  export default Test;