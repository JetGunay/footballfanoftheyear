			<?php $settings = get_general_settings(); ?>

			<!-- footer -->
			<footer class="footer" role="contentinfo">

				<div class="footer-wrapper">
					
                    <div class="footer-about">
						<?php echo nl2br($settings['about'][0]); ?>
					</div>
                    
                    <div class="assoc-wrapper">
                        <?php $counter = 0; ?>
                        <?php while ($counter < $settings['assoc'][0]) { ?>
                            <?php if ($settings['assoc_'.$counter.'_icon'][0]) { ?>
                                <?php $assoc_logo_attr = wp_get_attachment_image_src($settings['assoc_'.$counter.'_icon'][0], 'full'); ?>
                                <?php $assoc_link_array = maybe_unserialize($settings['assoc_'.$counter.'_link'][0]); ?>
                                <div class="assoc-item">
                                    <a href="<?php echo $assoc_link_array['url']; ?>"><img class="assoc-item-img" src="<?php echo $assoc_logo_attr[0]; ?>"></a>
                                </div>
                            <?php } ?>
                        <?php $counter++; ?>                
                        <?php } ?>
                    </div>
					
					<div class="footer-text">
						<div class="footer-left">
							<?php echo nl2br($settings['left_footer_text'][0]); ?>
						</div>
						<div class="footer-center">
							<?php echo nl2br($settings['center_footer_text'][0]); ?>
						</div>
						<div class="footer-right">
							<?php echo nl2br($settings['right_footer_text'][0]); ?>
						</div>
					</div>
				</div>

			</footer>
			<!-- /footer -->

		</div>
		<!-- /wrapper -->

		<?php wp_footer(); ?>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
