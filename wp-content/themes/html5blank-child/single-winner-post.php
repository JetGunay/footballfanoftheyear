<?php
 /* Template Name: Single Winner Post Template */ 

get_header();
$settings = get_general_settings();
?>

<main role="main">

<?php
global $post;
setup_postdata( $post );
$post_ID = get_the_ID();
?>

		<div class="main-wrapper qa">
		
			<!-- Banner -->
            <?php include("vidbanner.php"); ?>
            
            <!-- section -->
            <section class="page-content winners-section">
                <div class="section-wrapper">
                <a class="bck-btn" onclick="history.back();"> < <span>Back</span> </a>
                    <?php
                    while (have_posts($post_ID)) : the_post($post_ID); 
                        $photo = get_field('photo');
                        if( !empty( $photo ) ): ?>
                            <div class="single-post">
                                <h2><?php the_title(); ?></h2>
                                <div class="right">
                                    <div class="photo">
                                        <img src="<?php echo esc_url($photo['url']); ?>" alt="<?php echo esc_attr($photo['alt']); ?>" />
                                    </div>
                                </div>
                                <div class="left">
                                    <p><?php echo get_field('story'); ?></p>
                                </div>
                                
                            </div>
                        <?php elseif ( empty( $photo ) ): ?>
                            <div class="winner-post">
                                <div class="single-post">
                                    <h2><?php the_title(); ?></h2>
                                    <p><?php the_field('story'); ?></p>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endwhile;?>

                    <div class="btn">
                        <?php echo $settings['nomination_button'][0]; ?>
                    </div>
                </div>
            </section>

		</div>

	</main>

<?php get_footer(); ?>