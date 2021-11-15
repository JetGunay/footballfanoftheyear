<?php /* Template Name: Home Page Template */ ?>

<?php get_header(); ?>
<?php include('modals.php'); ?> 
<?php $settings = get_general_settings(); ?>

	<main role="main">

		<div class="main-wrapper home">
		
			<!-- Banner -->
			<?php include("banner.php"); ?>

			<!-- section -->
			<!-- <section class="home-section home-title">

				<div class="section-wrapper">
					<h1><?php echo $settings['title'][0]; ?></h1>
					<h3><?php echo $settings['subtitle'][0]; ?></h3>
					<div class="desc">
						<?php echo $settings['description'][0]; ?>
					</div>
				</div>

			</section> -->
			<!-- /section -->

			<!-- section -->
			<section class="home-section home-tc">

				<div class="section-wrapper">
					
					<div>
						<?php echo $settings['tandc'][0]; ?>
					</div>

				</div>

			</section>
			<!-- /section -->

			<!-- section -->
			<section class="home-section home-form">

				<div class="section-wrapper">
					<h2><?php echo $settings['form_title'][0]; ?></h2>
					<?php $content = apply_filters( 'the_content', $settings['short_code'][0] ); 
				    $content = str_replace( ']]>', ']]&gt;', $content );?>
					<?php echo $content; ?>
				</div>
			</section>
			<!-- /section -->

		</div>

	</main>

<?php get_footer(); ?>
