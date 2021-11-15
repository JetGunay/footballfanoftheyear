<?php /* Template Name: Winner's Page Template */ ?>

<?php get_header(); ?>
<?php 
$settings = get_general_settings(); 
?>
<?php query_posts(array(
   'post_type' => 'winners'
)); ?>

<main role="main">
	<div class="main-wrapper qa">
        <!-- Banner -->
        <?php include("fullbanner-header.php"); ?>
            <!-- section -->
            <section class="page-content winners-section">
                <div class="section-wrapper">
                    <?php
                    $args = array(
                        'post_type' => 'winner', 
                        'posts_per_page' => 5, 
                        'orderby'=>'date',
                        'order'=>'ASC'
                    );
                    $query = new WP_Query($args); 
                    while ($query->have_posts()) : $query->the_post(); 
                        $photo = get_field('photo');
                        if( !empty( $photo ) ): ?>
                            <div class="post flex-container">
                                <div class="right md-full">
                                    <h2><?php the_title(); ?></h2>
                                    <p><?php echo custom_field_excerpt('story'); ?></p>
                                </div>
                                <div class="left md-full">
                                    <div class="photo">
                                        <img src="<?php echo esc_url($photo['url']); ?>" alt="<?php echo esc_attr($photo['alt']); ?>" />
                                    </div>
                                </div>
                                <a href="<?php echo get_post_permalink() ?>">Read More</a>
                            </div>
                        <?php elseif ( empty( $photo ) ): ?>
                            <div class="winner-post">
                                <div class="post">
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
