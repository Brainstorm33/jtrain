<?php 

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_5fa92ade212ad',
	'title' => 'Home Fields',
	'fields' => array(
		array(
			'key' => 'field_5fa92af85fb01',
			'label' => 'Hero Section',
			'name' => '',
			'type' => 'tab',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'placement' => 'left',
			'endpoint' => 0,
		),
		array(
			'key' => 'field_5fa92b225fb02',
			'label' => 'Left Text',
			'name' => 'left_text',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'maxlength' => '',
			'rows' => 2,
			'new_lines' => 'br',
			'acfe_textarea_code' => 0,
		),
		array(
			'key' => 'field_5fa92b2f5fb03',
			'label' => 'Right Text',
			'name' => 'right_text',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'maxlength' => '',
			'rows' => 2,
			'new_lines' => 'br',
			'acfe_textarea_code' => 0,
		),
		array(
			'key' => 'field_5fa92b3d5fb04',
			'label' => 'Image',
			'name' => 'hero_image',
			'type' => 'image',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'acfe_thumbnail' => 0,
			'return_format' => 'array',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'uploader' => 'wp',
		),
		array(
			'key' => 'field_5fab9118c6958',
			'label' => 'About Section',
			'name' => '',
			'type' => 'tab',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'placement' => 'left',
			'endpoint' => 0,
		),
		array(
			'key' => 'field_5fab914ac6959',
			'label' => 'Section Name',
			'name' => 'about_section_name',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fab9179c695a',
			'label' => 'Title',
			'name' => 'about_title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fab9183c695b',
			'label' => 'Description',
			'name' => 'about_description',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'maxlength' => '',
			'rows' => '',
			'new_lines' => 'br',
			'acfe_textarea_code' => 0,
		),
		array(
			'key' => 'field_5fab91c5c695c',
			'label' => 'Video Poster Image',
			'name' => 'about_poster',
			'type' => 'image',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'acfe_thumbnail' => 0,
			'return_format' => 'array',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => '',
			'min_height' => '',
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
			'uploader' => 'wp',
		),
		array(
			'key' => 'field_5fd9e76ba169c',
			'label' => 'Preview Video',
			'name' => 'preview_about_video',
			'type' => 'file',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'uploader' => 'wp',
			'return_format' => 'url',
			'library' => 'all',
			'min_size' => '',
			'max_size' => '',
			'mime_types' => '',
		),
		array(
			'key' => 'field_5fab9208c695d',
			'label' => 'Video',
			'name' => 'about_video',
			'type' => 'file',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'return_format' => 'url',
			'library' => 'all',
			'min_size' => '',
			'max_size' => '',
			'mime_types' => '',
			'uploader' => 'wp',
		),
		array(
			'key' => 'field_5fb3db4c0ac31',
			'label' => 'Services Section',
			'name' => '',
			'type' => 'tab',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'placement' => 'left',
			'endpoint' => 0,
		),
		array(
			'key' => 'field_5fb3db670ac32',
			'label' => 'Section Name',
			'name' => 'services_section_name',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fb3e0140ac34',
			'label' => 'Link Text',
			'name' => 'services_link',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fb3e02f0ac35',
			'label' => 'Videos',
			'name' => 'services_videos',
			'type' => 'repeater',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'acfe_repeater_stylised_button' => 0,
			'collapsed' => '',
			'min' => 0,
			'max' => 0,
			'layout' => 'block',
			'button_label' => '',
			'sub_fields' => array(
				array(
					'key' => 'field_5fb3e0470ac36',
					'label' => 'Name',
					'name' => 'name',
					'type' => 'textarea',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'maxlength' => '',
					'rows' => 2,
					'new_lines' => 'br',
					'acfe_textarea_code' => 0,
				),
				array(
					'key' => 'field_5fc4b38d00dfb',
					'label' => 'Description',
					'name' => 'description',
					'type' => 'textarea',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'maxlength' => '',
					'rows' => '',
					'new_lines' => 'br',
					'acfe_textarea_code' => 0,
				),
				array(
					'key' => 'field_5fb3e06b0ac37',
					'label' => 'Video Poster Image',
					'name' => 'poster_image',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'acfe_thumbnail' => 0,
					'return_format' => 'array',
					'preview_size' => 'medium',
					'library' => 'all',
					'min_width' => '',
					'min_height' => '',
					'min_size' => '',
					'max_width' => '',
					'max_height' => '',
					'max_size' => '',
					'mime_types' => '',
					'uploader' => 'wp',
				),
				array(
					'key' => 'field_5fb3e0860ac38',
					'label' => 'Video',
					'name' => 'video',
					'type' => 'file',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'return_format' => 'url',
					'library' => 'all',
					'min_size' => '',
					'max_size' => '',
					'mime_types' => '',
					'uploader' => 'wp',
				),
				array(
					'key' => 'field_5fd9e78ea169d',
					'label' => 'Preview Video',
					'name' => 'preview_video',
					'type' => 'file',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'uploader' => 'wp',
					'return_format' => 'url',
					'library' => 'all',
					'min_size' => '',
					'max_size' => '',
					'mime_types' => '',
				),
			),
		),
		array(
			'key' => 'field_5fbe3c75e4701',
			'label' => 'Art Section',
			'name' => '',
			'type' => 'tab',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'placement' => 'left',
			'endpoint' => 0,
		),
		array(
			'key' => 'field_5fbe3ed0e4702',
			'label' => 'Section Name',
			'name' => 'art_section_name',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fbe3eece4703',
			'label' => 'Title',
			'name' => 'art_title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fbe3fbce4704',
			'label' => 'Slides',
			'name' => 'art_slides',
			'type' => 'repeater',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'acfe_repeater_stylised_button' => 0,
			'collapsed' => '',
			'min' => 0,
			'max' => 0,
			'layout' => 'table',
			'button_label' => '',
			'sub_fields' => array(
				array(
					'key' => 'field_5fbe3fc9e4705',
					'label' => 'Name',
					'name' => 'name',
					'type' => 'text',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'prepend' => '',
					'append' => '',
					'maxlength' => '',
				),
				array(
					'key' => 'field_5fbe3fcfe4706',
					'label' => 'Description',
					'name' => 'description',
					'type' => 'textarea',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'maxlength' => '',
					'rows' => '',
					'new_lines' => 'br',
					'acfe_textarea_code' => 0,
				),
				array(
					'key' => 'field_5fbe3fdde4707',
					'label' => 'Image',
					'name' => 'image',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'acfe_thumbnail' => 0,
					'return_format' => 'array',
					'preview_size' => 'medium',
					'library' => 'all',
					'min_width' => '',
					'min_height' => '',
					'min_size' => '',
					'max_width' => '',
					'max_height' => '',
					'max_size' => '',
					'mime_types' => '',
					'uploader' => 'wp',
				),
			),
		),
		array(
			'key' => 'field_5fc4ef4cd3bdf',
			'label' => 'Testimonials Section',
			'name' => '',
			'type' => 'tab',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'placement' => 'left',
			'endpoint' => 0,
		),
		array(
			'key' => 'field_5fc4ef59d3be0',
			'label' => 'Section Name',
			'name' => 'testimonials_section_name',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fc4ef6dd3be1',
			'label' => 'Testimonials',
			'name' => 'testimonials',
			'type' => 'repeater',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'acfe_repeater_stylised_button' => 0,
			'collapsed' => '',
			'min' => 0,
			'max' => 0,
			'layout' => 'block',
			'button_label' => '',
			'sub_fields' => array(
				array(
					'key' => 'field_5fc4ef7fd3be2',
					'label' => 'Author',
					'name' => 'author',
					'type' => 'text',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'prepend' => '',
					'append' => '',
					'maxlength' => '',
				),
				array(
					'key' => 'field_5fc4ef97d3be3',
					'label' => 'Speciality',
					'name' => 'speciality',
					'type' => 'text',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'prepend' => '',
					'append' => '',
					'maxlength' => '',
				),
				array(
					'key' => 'field_5fc4efb6d3be4',
					'label' => 'Testimonial Text',
					'name' => 'text',
					'type' => 'textarea',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '100',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'maxlength' => '',
					'rows' => '',
					'new_lines' => 'br',
					'acfe_textarea_code' => 0,
				),
				array(
					'key' => 'field_5fd9e7afa169e',
					'label' => 'Preview Video',
					'name' => 'preview_video',
					'type' => 'file',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'uploader' => 'wp',
					'return_format' => 'url',
					'library' => 'all',
					'min_size' => '',
					'max_size' => '',
					'mime_types' => '',
				),
				array(
					'key' => 'field_5fc4efd2d3be5',
					'label' => 'Video',
					'name' => 'video',
					'type' => 'file',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'return_format' => 'url',
					'library' => 'all',
					'min_size' => '',
					'max_size' => '',
					'mime_types' => '',
					'uploader' => 'wp',
				),
				array(
					'key' => 'field_5fc4effbd3be6',
					'label' => 'Video Poster Image',
					'name' => 'video_poster_image',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '50',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'acfe_thumbnail' => 0,
					'return_format' => 'array',
					'preview_size' => 'medium',
					'library' => 'all',
					'min_width' => '',
					'min_height' => '',
					'min_size' => '',
					'max_width' => '',
					'max_height' => '',
					'max_size' => '',
					'mime_types' => '',
					'uploader' => 'wp',
				),
			),
		),
		array(
			'key' => 'field_5fc4f01cd3be7',
			'label' => 'Press',
			'name' => 'press',
			'type' => 'repeater',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'acfe_repeater_stylised_button' => 0,
			'collapsed' => '',
			'min' => 0,
			'max' => 3,
			'layout' => 'table',
			'button_label' => '',
			'sub_fields' => array(
				array(
					'key' => 'field_5fc4f029d3be8',
					'label' => 'Logo',
					'name' => 'logo',
					'type' => 'image',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'acfe_thumbnail' => 0,
					'return_format' => 'array',
					'preview_size' => 'medium',
					'library' => 'all',
					'min_width' => '',
					'min_height' => '',
					'min_size' => '',
					'max_width' => '',
					'max_height' => '',
					'max_size' => '',
					'mime_types' => '',
					'uploader' => 'wp',
				),
				array(
					'key' => 'field_5fc4f04dd3be9',
					'label' => 'Press Text',
					'name' => 'press_text',
					'type' => 'textarea',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'default_value' => '',
					'placeholder' => '',
					'maxlength' => '',
					'rows' => '',
					'new_lines' => 'br',
					'acfe_textarea_code' => 0,
				),
				array(
					'key' => 'field_5fc4f069d3bea',
					'label' => 'Link',
					'name' => 'link',
					'type' => 'link',
					'instructions' => '',
					'required' => 0,
					'conditional_logic' => 0,
					'wrapper' => array(
						'width' => '',
						'class' => '',
						'id' => '',
					),
					'acfe_permissions' => '',
					'return_format' => 'array',
				),
			),
		),
		array(
			'key' => 'field_5fc7593f188f8',
			'label' => 'Contact Section',
			'name' => '',
			'type' => 'tab',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'placement' => 'left',
			'endpoint' => 0,
		),
		array(
			'key' => 'field_5fc75a4318900',
			'label' => 'Section Name',
			'name' => 'form_section_name',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fc75961188f9',
			'label' => 'Form Title',
			'name' => 'form_title',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fc7596a188fa',
			'label' => 'Description',
			'name' => 'form_description',
			'type' => 'textarea',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'maxlength' => '',
			'rows' => '',
			'new_lines' => 'br',
			'acfe_textarea_code' => 0,
		),
		array(
			'key' => 'field_5fc75988188fb',
			'label' => 'Address',
			'name' => 'form_location',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fc75a02188fc',
			'label' => 'Phone',
			'name' => 'phone',
			'type' => 'text',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_5fc75a17188fd',
			'label' => 'Instagram URL',
			'name' => 'instagram_url',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
		),
		array(
			'key' => 'field_5fc75a28188fe',
			'label' => 'Facebook URL',
			'name' => 'facebook_url',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
		),
		array(
			'key' => 'field_5fc75a38188ff',
			'label' => 'Linkedin URL',
			'name' => 'linkedin_url',
			'type' => 'url',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'default_value' => '',
			'placeholder' => '',
		),
		array(
			'key' => 'field_5fc79cb1787c0',
			'label' => 'Map',
			'name' => 'map',
			'type' => 'google_map',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'acfe_permissions' => '',
			'center_lat' => '',
			'center_lng' => '',
			'zoom' => '',
			'height' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'page_type',
				'operator' => '==',
				'value' => 'front_page',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'left',
	'instruction_placement' => 'label',
	'hide_on_screen' => array(
		0 => 'permalink',
		1 => 'block_editor',
		2 => 'the_content',
		3 => 'excerpt',
		4 => 'discussion',
		5 => 'comments',
		6 => 'revisions',
		7 => 'slug',
		8 => 'author',
		9 => 'format',
		10 => 'featured_image',
		11 => 'categories',
		12 => 'tags',
		13 => 'send-trackbacks',
	),
	'active' => true,
	'description' => '',
	'acfe_display_title' => '',
	'acfe_autosync' => array(
		0 => 'php',
		1 => 'json',
	),
	'acfe_form' => 0,
	'acfe_meta' => '',
	'acfe_note' => '',
	'modified' => 1608116171,
));

endif;