<?php get_header(); ?>

<div class="container mx-auto my-8">
<div class="flex flex-row flex-wrap py-4">
	<?php if ( have_posts() ) : ?>
		<main role="main" class="w-full px-2 pt-1 sm:w-2/3 md:w-3/4">
		<?php
		while ( have_posts() ) :
			the_post();
			?>

			<?php get_template_part( 'template-parts/content', get_post_format() ); ?>

		<?php endwhile; ?>
		</main>

	<?php endif; ?>

	<?php get_sidebar(); ?>
</div>
</div>

<?php
get_footer();
