terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "prosenkiewicz-terraform"
    key    = "prod/terraform.tfstate"
    region = "eu-north-1"
  }

}

# Configure the AWS Provider
provider "aws" {
  region = "eu-north-1"
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"
}