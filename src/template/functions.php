<?php 
add_theme_support( 'post-thumbnails' ); 
function my_assets() {
	wp_enqueue_style( 'style', get_stylesheet_uri());
	wp_enqueue_script( 'bundle', get_template_directory_uri() . '/js/bundle.js','','1.1', true);
}

add_action( 'wp_enqueue_scripts', 'my_assets' );

?>