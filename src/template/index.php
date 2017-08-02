<html>

<head>
    <?php
get_header()
?>
    <script>
        function sendMail() {
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            if (email !== '' && message !== '') {
                jQuery.ajax({
                    url: "https://formspree.io/tuguscript@gmail.com",
                    method: "POST",
                    data: {
                        email: email,
                        message: message
                    },
                    dataType: "json"
                });
            }

        }
    </script>
</head>

<body class="single">
    <!--[if lt IE 8]>
      <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Loader to display before content Load -->
    <!-- <div class="loading"><img src="<?php bloginfo('template_url'); ?>/images/puff.gif" alt=""></div>   -->



    <!-- Add your site or application content here -->

    <nav class="navigation">
        <ul>
            <li><a href="#about">about</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
    </nav>
    <header class="header-two">
        <div class="hero">
            <div class="hero-inner">
                <a href="" class="hero-logo"><img src="<?php bloginfo('template_url'); ?>/images/profile.png" alt="Logo Image" width="152" height="152"></a>
                <div class="hero-copy">
                    <h1><span>Hey, I’m</span> Tugi</h1>
                    <h6>Photographer, Web Developer, Mobile app developer, Web Designer, Speaker, Writer</h6>
                    <div class="media-link">
                        <a href="https://github.com/tuguScript"><i class="fa fa-github-square"></i></a>
                        <a href="https://twitter.com/tuguldur_01"><i class="fa fa-twitter-square"></i></a>
                        <a href="https://www.linkedin.com/in/tuguldurtech/"><i class="fa fa-linkedin-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="main">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="about">
                        <div id="about">
                            <div class="active-section">
                                <br>
                                <br>
                                <div class="about-section">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4>Who?</h4>
                                            <div class="about-content">
                                                <span class="active-color">Hello, I am Tuguldur, Photographer, Web Developer, Mobile app developer, Web Designer, Speaker, Writer</span>
                                                <p>
                                                    Hey what's up? Full name's Tuguldur but everyone calls me Tugi. I'm a front-end developer, currently living in Alameda, California.
                                                    Fluent in HTML5 CSS3 JS Sass Less and ReactJS. I know my way around NodeJS
                                                    and I've recently started experimenting with REST APIs using ExpressJS.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-5 col-md-offset-1">
                                            <h4>Basic Information</h4>
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h6>Address:</h6>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>lorem address</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h6>Date of Birth:</h6>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>6 December, 9999</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h6>Place of Birth:</h6>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>Ulaanbaatar, Mongolia</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h6>Language</h6>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>English</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <h6>Gender</h6>
                                                        </div>
                                                        <div class="col-md-8">
                                                            <p>Male</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br>
                    <br>
                    <!-- skill-section -->
                    <div id="skills" class="active-section">
                        <div class="section-block skill-section">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="skill-content">
                                        <h4 class="title">Skills</h4>

                                        <h6>NodeJS</h6>
                                        <div class="skillbar clearfix " data-percent="65%">
                                            <div class="skillbar-bar"></div>
                                            <div class="skill-bar-percent">65%</div>
                                        </div>
                                        <!-- End Skill Bar -->

                                        <h6>ReactJS</h6>
                                        <div class="skillbar clearfix " data-percent="70%">
                                            <div class="skillbar-bar"></div>
                                            <div class="skill-bar-percent">70%</div>
                                        </div>
                                        <!-- End Skill Bar -->
                                        <h6>React Native</h6>
                                        <div class="skillbar clearfix " data-percent="70%">
                                            <div class="skillbar-bar"></div>
                                            <div class="skill-bar-percent">70%</div>
                                        </div>

                                        <h6>Adobe Photoshop</h6>
                                        <div class="skillbar clearfix " data-percent="80%">
                                            <div class="skillbar-bar"></div>
                                            <div class="skill-bar-percent">90%</div>
                                        </div>
                                        <!-- End Skill Bar -->

                                        <h6>Photography</h6>
                                        <div class="skillbar clearfix " data-percent="50%">
                                            <div class="skillbar-bar"></div>
                                            <div class="skill-bar-percent">50%</div>
                                        </div>
                                        <!-- End Skill Bar -->

                                        <!-- End Skill Bar -->
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <img class="img-responsive" src="http://placehold.it/554x499" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>

                    <!-- Work-section -->
                    <div id="work"></div>
                    <br><br>
                    <div class="active-section" id="blog">
                        <section class="section-block">
                            <h4 class="title">Blog Post</h4>

                            <div class="row">
                                <div class="col-md-12">
                                    <div id="rex-blog-slider">
                                        <div id="blogPost"></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <br>
                    <br>
                    <div class="active-section" id="contact">
                        <section class="section-block">
                            <div class="tcontainer">
                                <div class="emailForm">
                                    <h4 class="title">Feel Free To Contact Me</h4>
                                    <form class="contact-forms" id="contact-forms">


                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input name="email" type="email" class="form-control" id="email" placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <textarea id="message" name="text" class="form-control" rows="6" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="contact-btn">
                                        <a class="btn btn-default rex-primary-btn-effect-No dark-color" href="javascript:void(0)" role="button"><span>Cancel</span></a>
                                        <a class="btn btn-default rex-primary-btn-effect" onclick="sendMail()" role="button">Send</a>
                                    </div>
                                </div>
                                <div class="divBlock-2">

                                    <h4 class="title">Contact Information</h4>
                                    <div class="">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <h6>Phone</h6>
                                                <a href="tel:+5103840214">+(510) 384 0212 </a>
                                            </li>
                                            <li class="list-group-item">
                                                <h6>Email</h6>
                                                <a href="mailto:tuguscript@gmail.com">tuguscript@gmail.com</a>
                                            </li>
                                            <li class="list-group-item">
                                                <h6>Find me on</h6>
                                                <p>github, twitter</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <footer>
                        <div class="row">
                            <div class="col-md-12">
                                <p>&copy; Copyright 2017 Tuguldur</p>
                            </div>
                        </div>
                    </footer>
                    </section>
                </div>




                <?php
	get_footer();
?>

</html>