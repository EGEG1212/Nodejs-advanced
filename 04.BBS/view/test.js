const template = require('./tem')

module.exports.test = function() {
    return`
    <div class="container" style="margin-top: 90px;">
      ${template.header()}
    <div class="container">  
      <h1>My Icons <i class="fas fa-heart"></i></h1>
      <p>An icon along with some text: <i class="fas fa-thumbs-up"></i></p> 
    </div>
      
    <div class="container">
      <p>Others:</p>
      <i class="fas fa-cloud"></i>
      <i class="fas fa-coffee"></i>
      <i class="fas fa-car"></i>
      <i class="fas fa-file"></i>
      <i class="fas fa-bars"></i>
      <i class="fas fa-air-freshener"></i>
    </div>
    
    ${template.footer()}

    `;
}
