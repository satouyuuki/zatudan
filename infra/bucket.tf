resource "google_storage_bucket" "static_website" {
  name          = "www.zatudan.click"
  location      = "us-east1"
  storage_class = "STANDARD"
  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
  force_destroy = false
}
