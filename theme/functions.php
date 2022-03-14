<?php

/**
 * Load theme css and scripts
 *
 * @return void
 */
function kd_elementor_child_enqueue_scripts()
{
  wp_enqueue_style(
    'style',
    get_template_directory_uri() . '/assets/js/style.css',
    '',
	,
    '1.0.0'
  );

  wp_enqueue_script( 'hero-video-script', get_template_directory_uri() . '/assets/js/hero_video_scripts.js','','1.2', true ); 

}
add_action('wp_enqueue_scripts', 'kd_elementor_child_enqueue_scripts', 20);