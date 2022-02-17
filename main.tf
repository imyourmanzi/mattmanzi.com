terraform {
  required_providers {
    google = {
      source  = "hashicorp/google-beta"
      version = "4"
    }
  }
}

provider "google-beta" {
  project = "mattmanzi-com"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_project" "default" {
  provider = google-beta

  project_id = "mattmanzi-com"
  name       = "mattmanzi-com"
}

resource "google_firebase_project" "default" {
  provider = google-beta
  project  = google_project.default.project_id
}
