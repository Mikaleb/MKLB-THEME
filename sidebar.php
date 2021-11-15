<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package mklb
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>
<aside class="w-full px-2 sm:w-1/3 md:w-1/4" id="secondary" class="widget-area">
	<div class="sticky top-0 w-full p-4">
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div>
</aside><!-- #secondary -->
