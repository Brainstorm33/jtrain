<?php
if ( ! class_exists( 'WP_List_Table' ) ) {
	require_once( ABSPATH . 'wp-admin/includes/class-wp-list-table.php' );
}



class Groups_List extends WP_List_Table {

	private $table_name;

	/** Class constructor */
	public function __construct() {
		global $wpdb;
		$this->table_name = $wpdb->prefix.'refer_friend';
		parent::__construct( [
			'singular' => __( 'Submission', 'sp' ), //singular name of the listed records
			'plural'   => __( 'Submissions', 'sp' ), //plural name of the listed records
			'ajax'     => false //should this table support ajax?
		] );

	}


	function get_groups( $per_page = 100, $page_number = 1 ) {

		global $wpdb;

		$sql = "SELECT * FROM ".$this->table_name;

		if ( ! empty( $_REQUEST['orderby'] ) ) {
			$sql .= ' ORDER BY ' . esc_sql( $_REQUEST['orderby'] );
			$sql .= ! empty( $_REQUEST['order'] ) ? ' ' . esc_sql( $_REQUEST['order'] ) : ' ASC';
		}

		$sql .= " LIMIT $per_page";

		$sql .= ' OFFSET ' . ( $page_number - 1 ) * $per_page;


		$result = $wpdb->get_results( $sql, ARRAY_A );

		return $result;
	}


	function delete_group( $id ) {
		global $wpdb;

		$wpdb->delete(
			$this->table_name,
			[ 'id' => $id ],
			[ '%d' ]
		);
	}

	function groups_count() {
		global $wpdb;

		$sql = "SELECT COUNT(*) FROM ".$this->table_name;

		return $wpdb->get_var( $sql );
	}

	public function no_items() {
		echo 'No submissions found.';
	}

	function column_name( $item ) {

		// create a nonce
		$delete_nonce = wp_create_nonce( 'bs_delete_group' );

		$title = '<strong>' . $item['name'] . '</strong>';

		$actions = [
			'delete' => sprintf( '<a href="?page=%s&action=%s&group=%s&_wpnonce=%s">Delete</a>', esc_attr( $_REQUEST['page'] ), 'delete', absint( $item['id'] ), $delete_nonce ),
		];

		return $title . $this->row_actions( $actions );
	}

	public function column_default( $item, $column_name ) {
		switch ( $column_name ) {
			case 'submit_date':
			case 'ip_address':
			case 'friend_name':
			case 'yname':
				return stripslashes($item[ $column_name ]);
			case 'friend_email':
			case 'email':
				return '<a href="mailto:'.stripslashes($item[ $column_name ]).'">'.stripslashes($item[ $column_name ]).'</a>';
			default:
				return print_r( $item, true ); //Show the whole array for troubleshooting purposes
		}
	}

	function column_cb( $item ) {
		return sprintf(
			'<input type="checkbox" name="bulk-delete[]" value="%d" />', $item['id']
		);
	}

	function get_columns() {
		$columns = [
			'cb'      => '<input type="checkbox" />',
			'friend_email' => 'Recipient’s email address',
			'friend_name' => 'Recipient’s name',
			'email' => 'Referer Email',
			'yname' => 'Referer Name',
			'submit_date' => 'Request Date',
			'ip_address' => 'IP Address',
		];

		return $columns;
	}

	public function get_sortable_columns() {
		$sortable_columns = array(
			'friend_name' => array( 'friend_name', true ),
			'yname' => array( 'yname', true ),
			'submit_date' => array( 'submit_date', true ),
		);

		return $sortable_columns;
	}

	public function get_bulk_actions() {
		$actions = [
			'bulk-delete' => 'Delete'
		];

		return $actions;
	}

	public function prepare_items() {

		$this->_column_headers = $this->get_column_info();

		/** Process bulk action */
		$this->process_bulk_action();

		$per_page     = $this->get_items_per_page( 'groups_per_page', 100 );

		$current_page = $this->get_pagenum();

		$total_items  = self::groups_count();



		$this->set_pagination_args( [
			'total_items' => $total_items, //WE have to calculate the total number of items
			'per_page'    => $per_page //WE have to determine how many items to show on a page
		] );


		$this->items = self::get_groups( $per_page, $current_page );

	}

	public function process_bulk_action() {

		//Detect when a bulk action is being triggered...
		if ( 'delete' === $this->current_action() ) {

			// In our file that handles the request, verify the nonce.
			$nonce = esc_attr( $_REQUEST['_wpnonce'] );

			if ( ! wp_verify_nonce( $nonce, 'bs_delete_group' ) ) {
				die( 'Go get a life script kiddies' );
			}
			else {
				self::delete_group( absint( $_GET['group'] ) );
//				wp_redirect( esc_url( add_query_arg() ) );
//				exit;
			}

		}

		// If the delete bulk action is triggered
		if ( ( isset( $_POST['action'] ) && $_POST['action'] == 'bulk-delete' )
		     || ( isset( $_POST['action2'] ) && $_POST['action2'] == 'bulk-delete' )
		) {

			$delete_ids = esc_sql( $_POST['bulk-delete'] );

			// loop over the array of record IDs and delete them
			foreach ( $delete_ids as $id ) {
				self::delete_group( $id );

			}
//			wp_redirect( esc_url( add_query_arg() ) );
//			exit;
		}
	}

}