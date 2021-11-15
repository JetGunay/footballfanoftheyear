<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_fanoftheyear' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
/** define( 'AUTH_KEY',         'kH3E=wn+=-.>!W?{X[~t&qnb #M<jJ!rc-(}N(y/TIxEX.[K V:c&aIeiUm?QtK]' );
define( 'SECURE_AUTH_KEY',  ') 6[865xEUi ~/MrN1@Qq+lDRLKpIF)Ll*=U5NpG#eRt,nyC 8e=+jKL)kbARc0R' );
define( 'LOGGED_IN_KEY',    '%HP}hXm`uLhK?~9@5/fg~fyBP`kRp:)@;>9qgYJ8is-+>%Kg*b6lE^}OYu_[qA;6' );
define( 'NONCE_KEY',        '%pJ<Jr3Ll16$399`7cuHk46(DaK#9X442<K$[C|,A:v[2$f;ec/hr5)*!Qt%m2S-' );
define( 'AUTH_SALT',        'B*{5ZcG08Ff0taMkJ9Qa#],4f7A-_$$p?BUrI)7pJj,DbktO]}:DK8^qRFke(S9$' );
define( 'SECURE_AUTH_SALT', 'sr9/[:^g0>),81qb&S%qt]1lMZb=j3NW@gxb7{7P6[1 >)={u~hoyyMZ/}T u/fM' );
define( 'LOGGED_IN_SALT',   'QTc-^k!zA{5sJhUA8jh)wZw:;Yqz28Hy7wp#XQ()atV7ExY#xhbeU@LDw-(aeucS' );
define( 'NONCE_SALT',       'f1og;S3.,!BUx| 3e6-[Am5YWYlnC$<Dct6XB,>CKz1CN5j8tad`Q(X3];c>RIzt' );
*/
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'ffoty';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
