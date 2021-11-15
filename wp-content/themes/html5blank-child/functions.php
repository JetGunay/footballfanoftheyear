<?php

function ffoty_dequeue_styles() {
    wp_dequeue_style('html5blank');
    wp_deregister_style('html5blank');
}
add_action('wp_enqueue_scripts', 'ffoty_dequeue_styles', 25);

function ffoty_enqueue_styles() {
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {
        
        //wp_register_style('fontawesome', get_stylesheet_directory_uri() . '/css/fontawesome/css/all.min.css');
        //wp_enqueue_style('fontawesome');

        wp_register_style('html5blank-child', get_stylesheet_directory_uri() . '/style.css');
        wp_enqueue_style('html5blank-child');

        wp_register_style('html5blank-child-responsive', get_stylesheet_directory_uri() . '/css/responsive.css');
        wp_enqueue_style('html5blank-child-responsive');
   
    }
}
add_action('wp_enqueue_scripts', 'ffoty_enqueue_styles');

function ffoty_scripts() {
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {

        wp_register_script('main-js', get_stylesheet_directory_uri() . '/js/main.js', '', '', true);
        wp_enqueue_script('main-js');

    }
}

add_action('init', 'ffoty_scripts');

function ffoty_shorten_text($str, $len, $ellipis='...', $more="more...")
{
    $str = strip_tags($str);

    if (mb_strlen($str) > $len)
    {
        $str = mb_substr($str, 0, $len);
        $str = $str . $ellipis;
        return $str . " <a href='".get_permalink()."'>".$more."</a>";
    }

    return $str;
}

register_nav_menus( array(
    'footer_menu' => 'Footer Menu',
) );

function ffoty_excerpt_length($length) {
    return 80;
}
add_filter('excerpt_length', 'ffoty_excerpt_length', 999);

//add_theme_support('post-thumbnails');
//add_image_size('hero-image', 700, 420);

function get_general_settings() {
    $settings_page_id = get_page_by_path('settings');
    $settings_page_id = $settings_page_id -> ID;
    return get_post_meta($settings_page_id);
}

function get_page_settings() {
    $post_id = get_the_ID();
    return get_post_meta($post_id);
}

function add_featured_image_html($html) {

    return $html .= '<p>Ideal size: <strong>1280px x 768px</strong></p>';

}
add_filter('admin_post_thumbnail_html', 'add_featured_image_html');


function add_custom_menu() {
    $settings_post = get_page_by_path('settings');
    add_menu_page('SiteSettings', 'Site Settings', 'edit_pages', admin_url('post.php?post='.$settings_post->ID.'&action=edit'), '', 'dashicons-admin-page', 75); 
}
add_action('admin_menu', 'add_custom_menu');

function create_post_type() {
    register_post_type( 'winner',
        array(
            'labels' => array(
                'name' => __( 'Winners' ),
                'singular_name' => __( 'Winner' )
            ),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => 'winner'),
            'show_in_rest' => true,
            'supports' => array('editor', 'title')
        )
    );
}
add_action( 'init', 'create_post_type' );

function custom_field_excerpt($title) {
    global $post;
    $text = get_field($title);
    if ( '' != $text ) {
        $text = strip_shortcodes( $text );
        $text = apply_filters('the_content', $text);
        $text = str_replace(']]>', ']]>', $text);
        $excerpt_length = 35;
        $excerpt_more = apply_filters(' ', ' ' . '[...]');
        $text = wp_trim_words( $text, $excerpt_length );
    }
    return apply_filters('the_excerpt', $text);
}

add_filter('single_template', function($original){
    global $post;
    $post_name = $post->post_name;
    $post_type = $post->post_type;
    $base_name = 'single-' . $post_type . '-post.php';
    $template = locate_template($base_name);
    if ($template && ! empty($template)) return $template;
    return $original;
  });

  /* Custom script, enqueued in the footer */
add_action('wp_enqueue_scripts', 'calendar_enqueue_custom_js');
function calendar_enqueue_custom_js() {
    wp_enqueue_script('calendar', get_stylesheet_directory_uri().'/js/calendar.js', 
    array('jquery'), false, true);
}
?>