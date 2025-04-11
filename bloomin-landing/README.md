# Bloomin - Medical Networking Platform

A comprehensive platform for medical professionals, students, researchers, and patients to connect, collaborate, and share knowledge.

## Features

- AI-Powered Medical Study & Learning Hub
- Real-Time Networking & Case Discussions
- AI-Verified Diagnosis Cross-Checked by Doctors
- Exclusive Medical Research & Institution Network
- Role-Based Medical Ecosystem

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is deployed on Netlify. To deploy changes:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy to Netlify:
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Page components
- `/src/contexts` - React contexts
- `/src/lib` - Utility functions and libraries
- `/src/hooks` - Custom React hooks

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

# Bloomin AWS Deployment

This repository contains CloudFormation templates and deployment scripts for setting up the Bloomin application infrastructure on AWS.

## Prerequisites

Before you can deploy the infrastructure, you need:

1. An AWS account (Account ID: 938540721007)
2. AWS CLI installed and configured with appropriate credentials
3. A registered domain name with Route 53 hosted zone
4. An SSL certificate for your domain (can be created using AWS Certificate Manager)
5. A GitHub repository for your application code
6. A GitHub personal access token with appropriate permissions

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/bloomin-landing.git
   cd bloomin-landing
   ```

2. Run the setup script to install required dependencies:
   ```bash
   ./setup.sh
   ```
   This script will:
   - Install AWS CLI, jq, Docker, and Git if not already installed
   - Configure AWS CLI with your credentials
   - Verify the installation

## Deployment

1. Run the deployment script:
   ```bash
   ./deploy-aws.sh
   ```

2. The script will prompt you for the following information:
   - Stack name (default: bloomin)
   - AWS region (default: us-east-1)
   - VPC CIDR (default: 10.0.0.0/16)
   - Database username (default: bloomin_admin)
   - Environment (default: production)
   - Domain name (required)
   - Route 53 hosted zone ID (required)
   - SSL certificate ARN (required)
   - GitHub repository (required)
   - GitHub branch (default: main)
   - GitHub personal access token (required)

3. The script will create the following AWS resources:
   - VPC with public and private subnets
   - Security groups for ECS, ALB, and RDS
   - RDS PostgreSQL database
   - ECS cluster and task definition
   - Application Load Balancer
   - S3 bucket for frontend files
   - CloudFront distribution
   - Route 53 DNS records
   - CI/CD pipeline using CodePipeline and CodeBuild

4. After deployment, the script will output:
   - Frontend URL
   - Backend API URL
   - Database endpoint
   - Database credentials
   - JWT secret

5. The deployment information will also be saved to `deployment/deployment-info.json`.

## Infrastructure Components

### VPC (vpc.yml)
- Creates a VPC with public and private subnets
- Sets up NAT gateways for private subnet internet access
- Configures route tables for proper traffic routing

### Security Groups (security.yml)
- Creates security groups for ECS, ALB, and RDS
- Configures appropriate ingress rules for each component

### RDS Database (rds.yml)
- Creates a PostgreSQL RDS instance
- Configures multi-AZ deployment for high availability
- Sets up proper security and networking

### Application Load Balancer (alb.yml)
- Creates an ALB with HTTP to HTTPS redirect
- Configures target groups for ECS services
- Sets up health checks

### S3 and CloudFront (s3.yml, cloudfront.yml)
- Creates an S3 bucket for frontend files
- Sets up CloudFront distribution for content delivery
- Configures proper access controls

### DNS Records (dns.yml)
- Creates Route 53 records for frontend and API
- Points to CloudFront distribution

### CI/CD Pipeline (pipeline.yml)
- Creates a CodePipeline for continuous deployment
- Sets up CodeBuild for building Docker images
- Configures GitHub integration for source code

## Troubleshooting

If you encounter any issues during deployment:

1. Check the CloudFormation console for stack events
2. Verify that your AWS credentials have sufficient permissions
3. Ensure that your domain name and Route 53 hosted zone are properly configured
4. Check that your SSL certificate is valid and covers your domain

## Cleanup

To delete all created resources, you can use the AWS CloudFormation console to delete the stacks in the following order:

1. bloomin-pipeline
2. bloomin-dns
3. bloomin-cloudfront
4. bloomin-s3
5. bloomin-alb
6. bloomin-rds
7. bloomin-security
8. bloomin-vpc

Alternatively, you can use the AWS CLI:

```bash
aws cloudformation delete-stack --stack-name bloomin-pipeline --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-dns --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-cloudfront --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-s3 --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-alb --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-rds --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-security --region us-east-1
aws cloudformation delete-stack --stack-name bloomin-vpc --region us-east-1
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
