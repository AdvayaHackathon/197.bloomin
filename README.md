# Bloomin Application

This repository contains the infrastructure and deployment scripts for the Bloomin application.

## Prerequisites

Before deploying the application, you need to have:

1. **AWS Account**: An AWS account with appropriate permissions
2. **Domain Name**: A registered domain name
3. **Route 53 Hosted Zone**: A hosted zone for your domain in Route 53
4. **SSL Certificate**: An SSL certificate in AWS Certificate Manager for your domain
5. **GitHub Repository**: A GitHub repository with your application code
6. **GitHub Token**: A GitHub personal access token with appropriate permissions

## Setup Instructions

### 1. Install Required Tools

Run the setup script to install the required tools:

```bash
./setup.sh
```

This will install:
- AWS CLI
- jq
- Docker Desktop
- Git

### 2. Configure AWS CLI

The setup script will prompt you to configure your AWS CLI with your credentials.

### 3. Deploy the Application

Run the deployment script:

```bash
./deploy-aws.sh
```

The script will prompt you for:
- Stack name (default: bloomin)
- AWS region (default: us-east-1)
- VPC CIDR (default: 10.0.0.0/16)
- Database username (default: bloomin_admin)
- Database password
- Environment (default: production)
- Domain name
- Route 53 hosted zone ID
- SSL certificate ARN
- GitHub repository (owner/repo)
- GitHub branch (default: main)
- GitHub personal access token

### 4. Application URLs

After deployment, you'll have access to:
- Frontend URL: https://your-domain.com
- API URL: https://api.your-domain.com

### 5. Authentication

The application uses JWT-based authentication. The JWT secret is generated during deployment and saved in the deployment information file.

## Application Structure

The application consists of:

1. **Frontend**: A React application hosted on CloudFront and S3
2. **Backend API**: A Node.js application running on ECS
3. **Database**: A PostgreSQL database on RDS
4. **CI/CD Pipeline**: A pipeline that automatically builds and deploys your application

## Troubleshooting

If you encounter any issues during deployment:

1. Check the CloudFormation console for stack events
2. Check the ECS console for service and task status
3. Check the RDS console for database status
4. Check the CloudWatch logs for application logs

## Security Notes

- The database password and JWT secret are stored securely
- All communication is encrypted using HTTPS
- The database is not publicly accessible
- The application uses security groups to restrict access

## Support

If you need help with the deployment or have any questions, please contact the development team. 