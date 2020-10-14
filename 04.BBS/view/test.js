module.exports.test = function() {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
      <script src="/jquery/jquery.min.js"></script>
      <script src="/popper/popper.min.js"></script>
      <script src="/bootstrap/js/bootstrap.min.js"></script>
    <body>
    
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
    </div>
    
    </body>
    </html>

    `;
}
