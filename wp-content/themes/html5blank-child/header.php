<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-KNCFM8V');</script>
		<!-- End Google Tag Manager -->
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_stylesheet_directory_uri(); ?>/img/icons/favicon-32x32.ico" rel="shortcut icon">
        <link href="<?php echo get_stylesheet_directory_uri(); ?>/img/icons/favicon-32x32.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_stylesheet_directory_uri(); ?>',
            tests: {}
        });
        </script>
	</head>
	<body <?php body_class(); ?>>
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNCFM8V"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header clear" role="banner">

				<div class="header-wrapper clear">
					<div class="header-left">

						<!-- logo -->
						<div class="logo">
							<a href="https://sports.coral.co.uk">
								<!-- svg logo - toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script -->
								<!-- <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Logo" class="logo-img"> -->
								<img src="data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwNjQuNSAxNjcuMDUiPjxwYXRoIGQ9Ik0xMzcuNzYgNDkuNTloNDQuMzhjLTkuMDYtMjAuNjMtMzEtNDAuMzUtNzYuOTEtMzlDOTAuNjkgMTEgMTMgMTkuMS42OCA5MC4yM2MtNCAyMyA3LjY3IDc1LjQ1IDgxLjcgNzMuMjUgMTEtLjMyIDYyLjIxLTIgODAuNTMtMzcuODJoLTQ3Yy0xMC4wOSAyMC0yOC43OSAyMy0zNy42MiAyMi40LTI3LjI5LTEuNjItMzIuOTUtMjMuNTMtMjUuNjQtNTYuOTEgMTMtNTkuNDYgNDguMTktNjIgNjEuNjctNjEuMTYgMTUuNzIgMSAxOS44MyA4IDIzLjQ0IDE5LjZtMjAyIDM0LjE5Yy0xOC4zOSA2My01NC43IDcwLjY5LTY4LjggNzAuMTEtMjguNi0xLjIzLTQwLjQ4LTIzLjkyLTMwLjE1LTU5LjQ2IDE4LjQ0LTYzIDU0Ljc3LTcwLjY2IDY4Ljg0LTcwLjA4IDI4LjU5IDEuMjIgNDAuNSAyMy45MSAzMC4xMSA1OS40M200Ni4zOS01LjEzYzkuNTQtNDUtMjAuMjctNjguMTUtNzcuNy02Ny40Ny0yOC4yMi4zOC05OS40MSA4LjY5LTExNi4zNiA4OC40MS05LjU4IDQ0Ljk1IDIwLjI2IDY4LjE0IDc3LjY5IDY3LjQ1IDI4LjI5LS40MSA5OS40Mi04LjcxIDExNi4zNy04OC4zOU01NjcgNDMuMWM4LjA5LTMzLjc3LTM5LjkxLTMyLTU2LjE1LTMyLjA5LTIwLjQ0LS4wOC00OC43NCAwLTc3LjQ5IDBsLTMuMTMgOS4zNmMxMS44OCAyLjIzIDkuNDkgOSA0LjM5IDIzLjY5LTEzLjQ4IDM5LTIwLjQxIDU2LjEtMzAuODggODIuNDhzLTEzLjM2IDM0Ljc0LTEzLjM2IDM0Ljc0aDQzLjUyczM1LjUzLTEwMS4xNyA0NC45LTEyMiA5LjctMjAuODMgMjQuNTYtMjAuNzRjMTYuNzguMTEgMjQuODcgMTEuNDUgMTguNzcgMjUuMTQtNS42NiAxMi43Ny0xNS4zMyAzMS4zMi01Ny4yOSA0NC43NGwtLjkzIDcgMjkuMzIgNjUuODdoNTEuODlzLTctMTEuMTMtMTYuMTYtMjcuMzljLTExLjk2LTIxLjIyLTE1LjQ0LTMwLjE4LTIyLjMyLTQ1Ljc3IDI0LjU3LTcuMTkgNTMuOC0xNy40NiA2MC4zNS00NW0xMzEuMTMgNTQuODRjLjI1IDEtLjU2IDEuNDctMS42IDEuNDdoLTQyLjlhMS4wOCAxLjA4IDAgMDEtLjgtMS41OWMxLjA2LTEuODQgMjQuNjEtMzQuNjIgMzUuNTItNDguNzJhNDc4LjE2IDQ3OC4xNiAwIDAwOS43OCA0OC44OW0xNS42NSA2NC4yaDQ0LjY0UzcyNS44NiAzMSA3MjIuMyAxOS4wOHMtMzcuNDMtMTEuMzMtNTIuNTkgNS45NWMtNi40MyA3LjMxLTEwMS42NCAxMzcuMTYtMTAxLjY0IDEzNy4xNmg0MS42MWwzNS44Ni00OC42IDU1LjM5LS4wNyAxMi44NCA0OC42NXptMTIxLjM2LTI3LjA4YzEwLjMtMjYuMDYgNDMuNzEtMTI0Ljc4IDQzLjcxLTEyNC43OGgtNjEuMzNsLTMuMTEgOS4xMmM3Ljc4IDIuMTIgMTEuNTUgNy43MiA3LjI0IDIzLjE2LTYuMTkgMjIuMTMtNDUgMTE5LjctNDUgMTE5LjdzMTIzLjY3IDAgMTI1LS4xMmMtLjA4LjA4IDktMjcuMSA5LTI3LjF6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTkxNy41MSAxMTEuNzFjMTQuMDktMTAuOTEgMzYuNC0yNS41OCA2MS4zMS0yMS4xMSAxOC44NCAzLjM3IDI3Ljg2IDQuMzcgNDEuODgtLjY0LTEzLjQ2LTMuOTItMTkuODQtMTAuNDMtMjcuMTEtMjAuNDMgMTIuNDUtNC4yMiAxNi41My00Ljg3IDMyLjc2LTE0Ljg4LTIuNzgtMi4zNC0xMy0xMC43My0zMS41MS0xMC44OS0yNi42OS0uMTgtNDEuNTMgOS4wNi02Mi4xNiAyMi4zOHoiIGZpbGw9IiNlZTQwNGEiLz48cGF0aCBkPSJNMTA2NC40OSAxNi45NmMtNi42MyA2LjUxLTE4LjI3IDE3LjM4LTQzLjY1IDcuMjRzLTQ1Ljc4IDIuNzUtNTEuMTYgNS41OWwtMTQuMTEgNDJjMTUuNjMtOS40OSAzMy4wNy0xNy44NSA1MS43OS0xMC43czI3LjMzIDYuMjkgNDMuMzgtMi40NnoiIGZpbGw9IiNmZmNhMDUiLz48cGF0aCBkPSJNOTM3LjUyIDUxLjc4Qzk1OC4xNyAzOC41MyA5NzMgMjkuMyA5OTkuNyAyOS40NWMyMi45My4xNSAzNy41OC0yLjQgNTcuMzQtMjkuNDUtMTkuNTcgMTAuMjctMzEuNTIgMTEuODgtNTIuNDggNS40NXMtMzYuNDEtMi42Ni01My42NyA2LjQ0bC0xMy4zNyAzOS44OXoiIGZpbGw9IiM3MmJlNDQiLz48L3N2Zz4=" alt="Logo" class="logo-img">
							</a>
						</div>
						<!-- /logo -->

					</div>

					<div class="header-right">
						<div class="navigation">
							<!-- nav -->
							<nav class="nav" role="navigation">
								<?php html5blank_nav(); ?>
							</nav>
							<!-- /nav -->
						</div>
						<div class="mobile-menu"></div>
					</div>
				</div>

				<nav id="mobile-menu">
					<!-- <div class="mobile-menu-close">X</div> -->
					<input class="menu-btn" type="checkbox" id="menu-btn" />
  					<label class="menu-icon" for="menu-btn">
						<span class="navicon">
							<div class="top"></div>
							<div class="middle"></div>
							<div class="bottom"></div>
						</span>
					</label>
					<span class="menu">
					  <?php html5blank_nav(); ?>
					</span>
				</nav>

			</header>
			<!-- /header -->
