# Epoxy Floor Job Sheets

Internal job sheet submission system for Epoxy Floor Experts employees.

## WordPress Integration

This Jekyll site is designed to be integrated with WordPress on epoxyfloorexperts.org. Follow these steps to set up the integration:

### 1. Install the Integration Plugin

1. Create a new directory in your WordPress plugins folder: `wp-content/plugins/epoxy-job-sheets/`
2. Copy the `wordpress-integration.php` file to this directory
3. Create a subdirectory: `wp-content/plugins/epoxy-job-sheets/jekyll/`
4. This is where the Jekyll site will be deployed

### 2. Set Up GitHub Actions Deployment

1. In your GitHub repository, go to Settings > Secrets and add the following secrets:
   - `FTP_SERVER`: Your WordPress hosting FTP server
   - `FTP_USERNAME`: Your FTP username
   - `FTP_PASSWORD`: Your FTP password

2. Push to the main branch to trigger the deployment workflow

### 3. Activate the Plugin

1. Log in to your WordPress admin
2. Go to Plugins and activate "Epoxy Job Sheets Integration"
3. A new page called "Epoxy Job Sheets" will be created at /forms/

### 4. Using the Shortcode

You can embed the job sheets app on any page using the shortcode:

