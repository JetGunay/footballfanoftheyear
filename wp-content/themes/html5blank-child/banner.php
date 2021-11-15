<!-- section -->
<section class="home-section home-banner">
	<!-- <?php $banner_desk_attr = wp_get_attachment_image_src($settings['banner_desktop'][0], 'full'); ?>
	<?php $banner_tablet_attr = wp_get_attachment_image_src($settings['banner_tablet'][0], 'full'); ?>
	<?php $banner_mobile_attr = wp_get_attachment_image_src($settings['banner_mobile'][0], 'full'); ?>
	<img id="home-banner-desk" alt="" src='<?php echo $banner_desk_attr[0]; ?>' />
	<img id="home-banner-tablet" alt="" src='<?php echo $banner_tablet_attr[0]; ?>' />
	<img id="home-banner-mobile" alt="" src='<?php echo $banner_mobile_attr[0]; ?>' /> -->
	
	<div class="banner-image-mob">
		<div class="image-frame">
			<?php $banner_logo_attr = wp_get_attachment_image_src($settings['banner_logo'][0], 'full'); ?>
			<img id="home-banner-logo" alt="" src='<?php echo $banner_logo_attr[0]; ?>' />
		</div>
	</div>
	<div class="banner-text">
		<h1><?php echo $settings['banner_title'][0]; ?></h1>
		<div class="desc">
			<?php if ( is_front_page() ) { ?>
				<?php $banner_text = apply_filters( 'the_content', $settings['banner_text'][0] ); ?>
			<?php } else { ?>
				<?php $banner_text = apply_filters( 'the_content', $settings['inner_banner_text'][0] ); ?>
			<?php } ?>
			<?php $banner_text = str_replace( ']]>', ']]&gt;', $banner_text );?>
			<?php echo $banner_text; ?>
		</div>
	</div>
	<div class="banner-image">
		<div class="image-frame">
			<?php $banner_logo_attr = wp_get_attachment_image_src($settings['banner_logo'][0], 'full'); ?>
			<img id="home-banner-logo" alt="" src='<?php echo $banner_logo_attr[0]; ?>' />
		</div>
	</div>
</section>
<!-- /section -->