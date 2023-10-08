# SSL Certificate
resource "aws_acm_certificate" "ssl_certificate_www" {
  provider                  = aws.acm_provider
  domain_name               = "*.${var.domain_name}"
  validation_method         = "DNS"

  tags = var.common_tags

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "cert_validation_www" {
  provider        = aws.acm_provider
  certificate_arn = aws_acm_certificate.ssl_certificate_www.arn
}


resource "aws_acm_certificate" "ssl_certificate_root" {
  provider                  = aws.acm_provider
  domain_name               = var.domain_name
  validation_method         = "DNS"

  tags = var.common_tags

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "cert_validation_root" {
  provider        = aws.acm_provider
  certificate_arn = aws_acm_certificate.ssl_certificate_root.arn
}