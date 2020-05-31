import React from 'react';
import "../css/mycard.css"

function MyCard(projectDetails){
        return(
        <div class="column mycard">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img class="card-image" src={require("../assets/img/project-images/"+projectDetails.imageName)}></img>
                    </div>
                    <div class="flip-card-back">
                        <p class="project-details">{projectDetails.details}</p>
                    </div>
                </div>
            </div>
            <p class="card-name">{projectDetails.description}</p>
            <p class="card-title">{projectDetails.title}</p>
        </div>
        );
}
export default (MyCard);    