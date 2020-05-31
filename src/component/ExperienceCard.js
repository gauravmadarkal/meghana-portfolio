import React from 'react';
import "../css/experience_card.css"


export default function ExperienceCard(details) {
  
  return (
    <div class="column experience-card">
        <div>
            <p class="experience-card-title">{details.title}</p>
            <div class="date">
            <span class="experience-date">{details.fromDate}</span>
            <span> to </span>
            <span class="experience-date">{details.toDate}</span>
            </div>
        </div>    
        <p class="experience-card-desc">{details.description}</p>
    </div>
  );
}
