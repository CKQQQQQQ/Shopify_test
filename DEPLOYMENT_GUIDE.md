# Deployment Guide for 新会陈皮 E-commerce Website

This guide will help you set up the necessary environment variables and deploy the application to GitHub Pages.

## Setting Up Environment Variables in GitHub Repository Secrets

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Add the following repository secrets:

### Database Configuration

- `DATABASE_URL`: Your PostgreSQL connection string from Supabase or another PostgreSQL provider
  - Format: `postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST]:[PORT]/postgres`
  - Example: `postgresql://postgres:password@db.example.supabase.co:5432/postgres`

### Next Auth Configuration

- `NEXTAUTH_SECRET`: A random string used to encrypt session cookies
  - You can generate one using: `openssl rand -base64 32`
- `NEXTAUTH_URL`: The URL where your application will be deployed
  - For GitHub Pages: `https://[YOUR-GITHUB-USERNAME].github.io/Shopify_test`
  - Example: `https://CKQQQQQQ.github.io/Shopify_test`

### Stripe Configuration (for payment processing)

- `STRIPE_PUBLIC_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Your Stripe webhook secret

## Setting Up a PostgreSQL Database with Supabase

1. Go to [Supabase](https://supabase.com/) and sign up or log in
2. Create a new project
3. Choose a name for your project (e.g., "shopify-chenpi")
4. Set a secure password for the PostgreSQL database
5. Choose a region close to your target audience
6. Wait for the project to be created
7. Go to "Settings" > "Database" to get your PostgreSQL connection string
8. Add the connection string as the `DATABASE_URL` secret in your GitHub repository

## Setting Up Stripe for Payment Processing

1. Go to [Stripe](https://stripe.com/) and sign up or log in
2. Get your API keys from the Stripe Dashboard
3. Add the API keys as secrets in your GitHub repository
4. Set up a webhook endpoint in the Stripe Dashboard
   - Endpoint URL: `https://[YOUR-GITHUB-USERNAME].github.io/Shopify_test/api/webhooks/stripe`
   - Events to listen for: `checkout.session.completed`, `payment_intent.succeeded`
5. Get the webhook signing secret and add it as the `STRIPE_WEBHOOK_SECRET` in your GitHub repository

## Deploying the Application

Once you've set up all the required environment variables, the application will be automatically deployed to GitHub Pages whenever you push changes to the `main` branch.

You can also manually trigger the deployment by going to the "Actions" tab in your GitHub repository and running the "Deploy to GitHub Pages" workflow.

## Troubleshooting

If you encounter any issues during deployment, check the following:

1. Make sure all the required environment variables are set correctly in the GitHub repository secrets
2. Check the GitHub Actions logs for any error messages
3. Ensure that your database is accessible from the GitHub Actions runner
4. Verify that your Stripe API keys are correct and have the necessary permissions 