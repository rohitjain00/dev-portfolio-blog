# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "dev-portfolio-blog"
  spec.version       = "0.2.0"
  spec.authors       = ["Rohit Jain"]
  spec.email         = ["rohitjain18005@gmail.com"]

  spec.summary       = "This is a simple efficient blog and portfolio"
  spec.homepage      = "https://github.com/rohitjain00/dev-portfolio-blog"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 3.2", "< 4.0"
  spec.metadata["source_code_uri"] = spec.homepage

  spec.files = Dir[
    "assets/**/*",
    "_includes/**/*",
    "_layouts/**/*",
    "_sass/**/*",
    "CHANGELOG.md",
    "LICENSE.txt",
    "README.md"
  ]

  spec.add_runtime_dependency "jekyll", "~> 4.4"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0"
  spec.add_runtime_dependency "jekyll-minifier", "~> 0.2"
  spec.add_runtime_dependency "jemoji", "~> 0.13"
  spec.add_runtime_dependency "kramdown-parser-gfm", "~> 1.1"
  spec.add_development_dependency "bundler", ">= 2.4", "< 3.0"
  spec.add_development_dependency "rake", "~> 13.0"
end
