var React = require('react');

function Projects () {
  return (
    <div className='container intro'>
      <div className='project-index'>
        <div>
          <div className='col-md-6'>
            <img className='project' src="http://i.imgur.com/iHXz3rh.png" />
          </div>
          <div className='col-md-6'>
            <h3>Financial Planner</h3>
            <p><strong>Description:</strong> The purpose of this app was to serve as a sort of simplified google spread sheet where the user can keep record of their current and/or future expenses.</p>
            <a href="https://drewsfinancialplanner.herokuapp.com/" target="_blank">Visit the Website</a>
          </div>
        </div>

        <div>
          <div className='col-md-6'>
            <img className='project' src="http://i.imgur.com/OmtId81.png" />
          </div>
          <div className='col-md-6'>
            <h3>Johari Window</h3>
            <p><strong>Decription: </strong>Johari Window is a developed psychology method for creating and applying team member feedback in the form of adjective assigning. My team and I built an app for our school, Turing, that students could use to give each other feedback after group projects. The project utilizes a fully optimized Rails backend API and a React frontend that serves the information to the student.</p>
            <a href="https://johariwindow.herokuapp.com/mywindow" target="_blank">Turing Students can use the live website.</a>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = Projects;
