<?php 
add_theme_support( 'post-thumbnails' ); 
function my_assets() {
	wp_enqueue_style( 'style', get_stylesheet_uri());
	
	wp_enqueue_script( 'bundle', get_template_directory_uri() . '/js/bundle.js','','1.1', true);
	wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/jquery.js');
	// wp_enqueue_script( 'jquery.flexnav.min', get_template_directory_uri() . '/js/jquery.flexnav.min.js','','', true);
	// wp_enqueue_script( 'grid', get_template_directory_uri() . '/js/grid.js','','1.1', true);
	// wp_enqueue_script( 'owl.carousel.min', get_template_directory_uri() . '/js/owl.carousel.min.js','','1.1', true);
	// wp_enqueue_script( 'wow.min', get_template_directory_uri() . '/js/wow.min.js','','1.1', true);
	// wp_enqueue_script( 'jquery.nav', get_template_directory_uri() . '/js/jquery.nav.js','','1.1', true);
	// wp_enqueue_script( 'typed.min', get_template_directory_uri() . '/js/typed.min.js','','1.1', true);
	// wp_enqueue_script( 'jquery.scrollUp.min', get_template_directory_uri() . '/js/jquery.scrollUp.min.js','','1.1', true);
	// // wp_enqueue_script( 'scroll', get_template_directory_uri() . '/js/scroll.js', array ( 'jquery' ));
	// wp_enqueue_script( 'jquery.sticky', get_template_directory_uri() . '/js/jquery.sticky.js','','1.1', true);
	// wp_enqueue_script( 'masonry.pkgd.min', get_template_directory_uri() . '/js/masonry.pkgd.min.js','','1.1', true);
	// wp_enqueue_script( 'skrollr', get_template_directory_uri() . '/js/skrollr.js','','1.1', true);
	// wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/scripts.js','','1.1', true);
	// wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/js/modernizr.js','','1.1', true);
}

add_action( 'wp_enqueue_scripts', 'my_assets' );

?>