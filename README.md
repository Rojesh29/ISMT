# ISMT College Cloud Portal — Next.js

A lightweight Next.js website designed as the application workload for the Unit 28 Cloud Computing assignment. The assignment brief requires documenting the hosting of the ISMT College website on AWS and migrating its site data, alongside a three-tier VPC, NAT Gateway, security groups, EC2, Application Load Balancer and Auto Scaling Group.

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production test:

```bash
npm run build
npm start
```

Health check: http://localhost:3000/api/health

## AWS deployment idea

Use this app on an EC2 Launch Template. Put application EC2 instances in private application subnets. Place an Application Load Balancer in public subnets. Use a NAT Gateway for outbound access from private subnets. Attach the EC2 instances to an Auto Scaling Group and configure the ALB target group health check to `/api/health`.

For the assignment, capture evidence of:
- website working through the ALB DNS name
- two or more healthy targets in the target group
- EC2 instances in private subnets
- NAT Gateway and route tables
- security groups
- Auto Scaling Group desired/min/max capacity
- `/api/health` returning different hostnames when testing multiple instances

## Important

The text and contact details are demonstration content for the academic project. Replace them with official ISMT-approved content before any real public deployment.
