<?php get_header(); ?>
<?php $settings = get_general_settings(); ?>
<?php $page_settings = get_page_settings(); ?>

	<main role="main">

		<div class="main-wrapper home">
		
			<!-- Banner -->
			<?php include("banner.php"); ?>

			<!-- section -->
			<section class="page-section">

				<div class="section-wrapper">
					<h1><?php the_title(); ?></h1>
					<h3><?php echo $page_settings['sub_title'][0]; ?></h3>
					<div class="desc">
						<?php the_content(); ?>
					</div>
				</div>

			</section>
			<!-- /section -->

		</div>

	</main>

<?php get_footer(); ?>