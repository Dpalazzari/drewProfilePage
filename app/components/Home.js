var React = require('react');

class Home extends React.Component{
  render(){
    return (
      <div className='container'>
        <h1>Welcome to Drew&#39;s Portfolio!</h1>
        <img className='avatar' src="https://scontent.xx.fbcdn.net/v/t31.0-8/861271_10200590770874319_1434066940_o.jpg?oh=905c866a03b34296355750cc678d8a15&oe=598B9E07" />
        <p className='faq'>Coming from a background as a molecular lab technician, I am passionate about clean, well-tested code with great documentation that focuses on the customer&#39;s needs. I thrive in challenging environments where each day presents a problem to be solved and new ideas are encouraged. I&#39;m interested in working in a place that pushes employees to grow and allows their engineers to help shape the product. I love working on the entire stack, whether it&#39;s designing a database, building an API, or styling a page. I feel most comfortable with Rails, Ruby, and JavaScript, but am excited to work with any new language or framework.</p>
        <p className='faq'>For instance, as evidenced by this website, I am in the process of learning React.js.</p>
        <h2>Relevant Links</h2>
        <div className='relevant-links'>
          <a href="https://github.com/Dpalazzari" target="_blank"><img className='resources' src="https://image.flaticon.com/icons/svg/25/25231.svg" /></a>
          <a href="https://www.linkedin.com/in/drewpalazzari/" target="_blank"><img className='resources' src="https://image.flaticon.com/icons/svg/34/34405.svg" /></a>
          <a href="https://www.turing.io/alumni/drew-palazzari" target="_blank"><img className='resources' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-340/turing.png" /></a>
        </div>
      </div>
    )
  }
}

module.exports = Home;
