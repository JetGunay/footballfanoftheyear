<!-- section -->
<section class="fullwidth-section">
	<div class="fullwidth-banner width-lg">
		<!-- 
		<?php $banner_tablet_attr = wp_get_attachment_image_src($settings['fullwidth_image_banner_tablet'][0], 'full'); ?>
		<?php $banner_mobile_attr = wp_get_attachment_image_src($settings['fullwidth_image_banner_mobile'][0], 'full'); ?>
		
		<img id="home-banner-tablet" alt="" src='<?php echo $banner_tablet_attr[0]; ?>' />
		<img id="home-banner-mobile" alt="" src='<?php echo $banner_mobile_attr[0]; ?>' /> -->

		<?php $fullwidth_banner_desk_attr = wp_get_attachment_image_src($settings['fullwidth_image_banner_desktop'][0], 'full'); ?>
		<img id="fullwidth-banner-desk" alt="" src='<?php echo $fullwidth_banner_desk_attr[0]; ?>' />
	</div>
</section>
<!-- /section -->