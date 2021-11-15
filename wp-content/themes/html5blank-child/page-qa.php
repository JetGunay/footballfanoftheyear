<?php /* Template Name: Q&A Page Template */ ?>

<?php get_header(); ?>
<?php $settings = get_general_settings(); ?>

	<main role="main">

		<div class="main-wrapper qa">
		
			<!-- Banner -->
            <?php include("fullwidth-banner.php"); ?>
            
            <!-- section -->
            <section class="page-content qa-section">
                <div class="section-wrapper">
                    <a class="bck-btn" onclick="history.back();"> < <span>Back</span> </a>
                    <div class="qanda">
                    <?php $counter = 0; ?>
                    <?php while ($counter < $settings['QandA'][0]) { ?>
                        <?php if ($settings['QandA_'.$counter.'_question'][0]) { ?>
                            <?php $questions = sanitize_text_field($settings['QandA_'.$counter.'_question'][0])?>
                            <?php $answers = html_entity_decode($settings['QandA_'.$counter.'_answer'][0]);?>
                            <h2><?php echo $questions?></h2>
                            <p><?php echo $answers?></p>
                        <?php } ?>
                    <?php $counter++; ?>
                    <?php } ?>
                    </div>
                    <div class="btn">
                        <?php echo $settings['nomination_button'][0]; ?>
                    </div>
                </div>
            </section>

		</div>

	</main>

<?php get_footer(); ?>
