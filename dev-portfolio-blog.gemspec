# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "dev-portfolio-blog"
  spec.version       = "0.1.10"
  spec.authors       = ["Rohit Jain"]
  spec.email         = ["rohitjain18005@gmail.com"]

  spec.summary       = "This is a simple efficient blog and portfolio"
  spec.homepage      = "https://github.com/rohitjain00/dev-portfolio-blog"
  spec.license       = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(blog|assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", "~>4.0"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-sitemap"
  spec.add_runtime_dependency "jekyll-paginate-v2"
  spec.add_runtime_dependency "jemoji"
  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
