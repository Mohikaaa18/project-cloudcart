provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "cloudcart_bucket" {
  bucket = "cloudcart-demo-bucket-12345"
}