<?php
/**
 * Plugin Name: Epoxy Job Sheets Integration
 * Description: Integrates the Jekyll-based Epoxy Job Sheets application with WordPress
 * Version: 1.0
 * Author: Your Name
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class Epoxy_Job_Sheets_Integration {
    
    public function __construct() {
        // Register the custom rewrite rules
        add_action('init', array($this, 'register_rewrite_rules'));
        
        // Add shortcode to embed the job sheets app
        add_shortcode('epoxy_job_sheets', array($this, 'job_sheets_shortcode'));
        
        // Register activation hook
        register_activation_hook(__FILE__, array($this, 'plugin_activation'));
        
        // Add admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));
    }
    
    /**
     * Register rewrite rules to handle the /forms/ path
     */
    public function register_rewrite_rules() {
        add_rewrite_rule(
            '^forms/?$',
            'index.php?pagename=forms',
            'top'
        );
        
        add_rewrite_rule(
            '^forms/([^/]+)/?$',
            'index.php?pagename=forms&job_sheet_page=$matches[1]',
            'top'
        );
        
        // Add custom query var
        add_filter('query_vars', function($vars) {
            $vars[] = 'job_sheet_page';
            return $vars;
        });
        
        // Maybe flush rewrite rules if needed
        if (get_option('epoxy_job_sheets_flush_rewrite')) {
            flush_rewrite_rules();
            delete_option('epoxy_job_sheets_flush_rewrite');
        }
    }
    
    /**
     * Shortcode to embed the job sheets app
     */
    public function job_sheets_shortcode($atts) {
        $atts = shortcode_atts(array(
            'page' => 'index',
        ), $atts);
        
        // Get the job sheet page from query var or shortcode attribute
        $job_sheet_page = get_query_var('job_sheet_page', $atts['page']);
        
        // Path to the Jekyll _site directory
        $jekyll_path = plugin_dir_path(__FILE__) . 'jekyll/_site/';
        
        // If the page exists, include it
        $file_path = $jekyll_path . $job_sheet_page . '.html';
        
        if (file_exists($file_path)) {
            ob_start();
            include $file_path;
            return ob_get_clean();
        }
        
        return 'Job sheet page not found.';
    }
    
    /**
     * Plugin activation
     */
    public function plugin_activation() {
        // Create a forms page if it doesn't exist
        if (!get_page_by_path('forms')) {
            wp_insert_post(array(
                'post_title' => 'Epoxy Job Sheets',
                'post_name' => 'forms',
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => '[epoxy_job_sheets]'
            ));
        }
        
        // Set flag to flush rewrite rules
        update_option('epoxy_job_sheets_flush_rewrite', true);
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_menu_page(
            'Epoxy Job Sheets',
            'Job Sheets',
            'manage_options',
            'epoxy-job-sheets',
            array($this, 'admin_page'),
            'dashicons-clipboard',
            30
        );
    }
    
    /**
     * Admin page
     */
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1>Epoxy Job Sheets Integration</h1>
            <p>This plugin integrates the Jekyll-based Epoxy Job Sheets application with WordPress.</p>
            <p>Use the shortcode <code>[epoxy_job_sheets]</code> to embed the job sheets app on any page.</p>
            <p>The app is also available at <a href="<?php echo site_url('/forms/'); ?>"><?php echo site_url('/forms/'); ?></a></p>
        </div>
        <?php
    }
}

// Initialize the plugin
new Epoxy_Job_Sheets_Integration();

