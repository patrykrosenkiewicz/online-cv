# S3 bucket for website.
resource "aws_s3_bucket" "www_bucket" {
  bucket = "www.${var.bucket_name}"
  tags = var.common_tags
}

resource "aws_s3_bucket_website_configuration" "www_bucket" {
  depends_on = [aws_s3_bucket.www_bucket]
  bucket = aws_s3_bucket.www_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id
  depends_on = [ aws_s3_bucket_public_access_block.www_bucket ]

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}


resource "aws_s3_bucket_public_access_block" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "allow_read_www_bucket" {
  depends_on = [aws_s3_bucket_public_access_block.www_bucket]

  bucket = aws_s3_bucket.www_bucket.id
  policy = templatefile("templates/s3-policy.json", { bucket = "www.${var.bucket_name}" })
}

resource "aws_s3_bucket_acl" "www_bucket" {
  depends_on = [aws_s3_bucket_ownership_controls.www_bucket]
  
  bucket = aws_s3_bucket.www_bucket.id
  acl    = "public-read"
}

# S3 bucket for redirecting non-www to www.
resource "aws_s3_bucket" "root_bucket" {
  bucket = var.bucket_name
  tags = var.common_tags
}

resource "aws_s3_bucket_policy" "allow_read_root_bucket" {
  depends_on = [aws_s3_bucket_public_access_block.root_bucket]
  bucket = aws_s3_bucket.root_bucket.id
  policy = templatefile("templates/s3-policy.json", { bucket = var.bucket_name })
}

resource "aws_s3_bucket_website_configuration" "root_bucket" {
  depends_on = [aws_s3_bucket.root_bucket]

  bucket = aws_s3_bucket.root_bucket.id

  redirect_all_requests_to {
    host_name = "https://www.${var.domain_name}"
  }
}

resource "aws_s3_bucket_ownership_controls" "root_bucket" {
  bucket = aws_s3_bucket.root_bucket.id
  depends_on = [ aws_s3_bucket_public_access_block.root_bucket ]
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}


resource "aws_s3_bucket_public_access_block" "root_bucket" {
  bucket = aws_s3_bucket.root_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "root_bucket" {
  depends_on = [aws_s3_bucket_ownership_controls.root_bucket]

  bucket = aws_s3_bucket.root_bucket.id
  acl    = "public-read"
}