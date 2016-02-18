<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Slider</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">


    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="./js/custom.js"></script>
  </head>
  <body>
    <div class="container">
        <header>
          <div class="header-wrapper">
            <div class="header">
              <div class="row">
                  <div class="col-xs-12">
                      <h1>Slider</h1>
                    </div>
                  </div>
              </div>
          </div>
        </header>
        <main>
          <div class="main-wrapper">
            <div class="main">
              <div class="row">
                  <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10 col-xs-12">
                    <div class="a9-slider" data-agimg-direction='left' data-slidechange-interval="3000" data-animation-interval="1000">
                      <img class="active" src="./img/photo_default.png">
                      <img class="" src="./img/photo_default.png">
                      <img class="" src="./img/photo_default.png">
                      <img class="" src="./img/photo_default.png">
                      <dir class="text-container">
                        <div class="slider-text active">
                          <h2>First Slide</h2>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div class="slider-text">
                          <h2>Second Slide</h2>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div class="slider-text">
                          <h2>Third Slide</h2>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div class="slider-text">
                          <h2>Fourth Slide</h2>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                      </dir>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div class="footer-wrapper">
            <div class="footer">
              <div class="row">
                <div class="col-xs-12">
                  <div class="text-center">
                    <p><i class="fa fa-copyright"></i> 2016 slider. All rights reserved. Terms of Service &#38; Privacy Pollcy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
    <script type="text/javascript">
      $(document).ready(function(){
        $(".a9-slider").start_slider();
      });
    </script>
  </body>
</html>
