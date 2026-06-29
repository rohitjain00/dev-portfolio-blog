[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 [![Gem Version](https://badge.fury.io/rb/dev-portfolio-blog.svg)](https://badge.fury.io/rb/dev-portfolio-blog)
![](https://ruby-gem-downloads-badge.herokuapp.com/dev-portfolio-blog)

[![CodeFactor](https://www.codefactor.io/repository/github/rohitjain00/dev-portfolio-blog/badge)](https://www.codefactor.io/repository/github/rohitjain00/dev-portfolio-blog)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0b9f1c23f564a8195a8588de7895c4c)](https://www.codacy.com/manual/rohitjain00/dev-portfolio-blog?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rohitjain00/dev-portfolio-blog&amp;utm_campaign=Badge_Grade)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Frohitjain00%2Fdev-portfolio-blog&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

## Home pagespeed

![GitHub PageSpeed](https://api.speedbadge.io/v1?url=therohitjain.com&showStratLabel=true)
![GitHub PageSpeed](https://api.speedbadge.io/v1?url=therohitjain.com&strat=desktop&showStratLabel=true)


## Blog pagespeed

![GitHub PageSpeed](https://api.speedbadge.io/v1?url=therohitjain.com/blog&showStratLabel=true)
![GitHub PageSpeed](https://api.speedbadge.io/v1?url=therohitjain.com/blog&strat=desktop&showStratLabel=true)



# dev-portfolio-blog

This is a minimal jekyll theme for writing blogs and about yourself.

## features
 1. Google Analytics
 2. Many themes such as: Default, Solarized, and Sepia. All in light and dark modes.
 3. Disqus comments
 4. Categorization
 5. Emojis Support
 6. Highly optimized blog
     #### PageSpeed Insights
     * [Home](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ftherohitjain.com)[(therohitjain.com)](https://therohitjain.com)
     * [Blog](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ftherohitjain.com/blog/)[(therohitjain.com/blog/)](https://therohitjain.com/blog/)
     * [About](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ftherohitjain.com/about/)[(therohitjain.com/about/)](https://therohitjain.com/about/)


## Desktop Preview

![Home Page](/screenshots/Home.png?raw=true "Home View of the website")

![Blog List Page](/screenshots/Blog.png?raw=true "Blog List of the website")

## Mobile Preview

![Home Page](/screenshots/Home-Mobile.png?raw=true "Home View of the website")

![Blog List Page](/screenshots/Blog-Mobile.png?raw=true "Blog List of the website")


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "dev-portfolio-blog"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: dev-portfolio-blog
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install dev-portfolio-blog

## Usage

To start using the theme you either follow these steps or simply fork my repo https://github.com/rohitjain00/rohitjain00.github.io and update the files.

### Recommended
 Please use the theme as the plugin so that all the latest updated for this theme comes directly in your website.

#### Clone the branch `master` and change the theme accordingly.


### Starting from the beginning:
Assuming that you started your first website based on `minima` theme from [here](https://jekyllrb.com/docs/)

1. Add a `favicon.ico` to the root directory for favicon.

2. Create `blog.md` in the root folder ans set its yaml parameters to

```yaml
layout: blog
permalink: /blog/
title: [Blog Page Title]
pagination:
  enabled: true
```

3. Change your `about.md` yaml parameters to following

```yaml
layout: description
permalink: /about/
title: About
```

3. In the `index.md` file add

```yaml
layout: home
home_text: Text
title: [Home Page Title]
```

4. Create a new `categories.md` file in root with following yaml parameters
```yaml
layout: categories
permalink: /categories/
title: Categories
```

4. In the `_config.yml` file add following and change accordingly

Path is relative to the root directory
```yaml
resume_url: ""
author_name: "Your Name"
description: "A short description of the site."
url: "https://your-domain.example"
google_analytics: "G-XXXXXXXXXX"
disqus:
  shortname: ""
```

Leave `resume_url` blank to hide the Resume navigation link. Leave `disqus.shortname` blank to disable comments. The dummy `G-XXXXXXXXXX` value keeps Google Analytics disabled; replace it with a real measurement ID only when you want analytics enabled.

### Minifier

Visit [Jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier) and add this to your `_config.yml` file to enable minifier.

### Pagination

Visit [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-GENERATOR.md#site-configuration) and add this to your `_config.yml` file to enable pagination.

### Check here [_config.yml](https://github.com/rohitjain00/rohitjain00.github.io/blob/site/_config.yml) for example config file.


## Writing a new blog

Create a new folder `_posts` in root folder if not already exists.

1. Create a new markdown file in the format `yyyy-mm-dd-postname.md`
2. Set `comments: true` only when `disqus.shortname` is configured.
3. Add YAML configuration to the post. Set `description` to control the summary shown on the blog index.

```yaml
---
layout: post
comments: [true | false]
title: Hello World
categories: [category1, category2]
description: A short introduction to this post.
---
Post Text.
```

The blog index uses `description` when it is present. Otherwise, it shows a plain-text preview of the post excerpt, limited to 30 words. Individual post pages continue to display the complete post.

## Troubleshooting
- ` Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes`
   Node JS is missing from your system. In ubuntu install using `sudo apt-get install nodejs` or refer to [this](https://stackoverflow.com/questions/9202324/execjs-could-not-find-a-javascript-runtime-but-execjs-and-therubyracer-are-in)


## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/rohitjain00/dev-portfolio-blog/.> This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

The project targets Ruby 3.2 and Jekyll 4.4. The repository is both the theme source and a demo Jekyll site, so running it locally lets you preview changes to the layouts, includes, Sass, JavaScript, and sample pages.

### Docker

Docker is the recommended setup because it provides the required Ruby, Bundler, Jekyll, and Node.js runtime without installing them on your host machine.

Start Docker Desktop first. On Windows, make sure your terminal can access Docker; if `docker info` returns a permission error, open a new terminal after Docker Desktop starts or run the terminal with Docker access.

Build the image and start the demo site:

```sh
docker compose -f compose.yml up --build
```

Open `http://localhost:4000`.

Source files are mounted into the container, so Jekyll rebuilds the site when they change. Stop the server with `Ctrl+C`; remove the container with:

```sh
docker compose -f compose.yml down
```

If the server starts but `http://localhost:4000` does not load, recreate the container so Docker applies the port mapping:

```sh
docker compose -f compose.yml down --remove-orphans
docker compose -f compose.yml up --build --force-recreate
```

Confirm that the `PORTS` column includes `127.0.0.1:4000->4000/tcp`:

```sh
docker compose -f compose.yml ps
```

To verify that the site compiles without starting the server, run:

```sh
docker compose -f compose.yml build
```

If dependencies were changed or Docker reused an old bundle layer, rebuild without cache:

```sh
docker compose -f compose.yml build --no-cache
```

To run one-off Jekyll or Bundler commands in the same environment:

```sh
docker compose -f compose.yml run --rm site bundle exec jekyll build
docker compose -f compose.yml run --rm site bundle update dev-portfolio-blog
```

Run `bundle update dev-portfolio-blog` after changing `dev-portfolio-blog.gemspec` so the local demo lockfile reflects the current theme version and dependency bounds.

### Native Ruby

If you prefer not to use Docker, install Ruby 3.2, Bundler, and Node.js, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000`. Use `bundle exec jekyll build` for a compile-only check.

The gem contains the files under `_layouts`, `_includes`, `_sass`, and `assets`, plus the README, license, and changelog. Update `spec.files` in `dev-portfolio-blog.gemspec` when adding another packaged directory.

### Demo Publishing

The GitHub Actions workflow builds the demo site into `_site` and publishes that generated output to the `sample-site` branch. Configure GitHub Pages to serve from the `sample-site` branch.

The local `_site` directory is ignored because it is generated output. Rebuild it with Docker or `bundle exec jekyll build`; do not edit files inside `_site` by hand.

## Release

Version 0.2.0 adds the Docker development environment, Ruby 3.2 and Jekyll 4.4 support, short blog-index previews, bounded gem dependencies, and updated Sass and minifier configuration. See [CHANGELOG.md](CHANGELOG.md) for the release history.

Before releasing a new version, update the version in `dev-portfolio-blog.gemspec` and add its changes to `CHANGELOG.md`. Run a clean build and create the gem from the verified container:

```sh
docker compose build --no-cache
docker compose run --rm --no-deps site gem build dev-portfolio-blog.gemspec
```

Inspect the generated gem before publishing:

```sh
docker compose run --rm --no-deps site gem specification ./dev-portfolio-blog-0.2.0.gem --yaml
```

Commit the release, create an annotated version tag, and push both:

```sh
git add dev-portfolio-blog.gemspec CHANGELOG.md
git commit -m "Release version 0.2.0"
git tag -a v0.2.0 -m "Release version 0.2.0"
git push origin master
git push origin v0.2.0
```

Sign in interactively so credentials and MFA codes are not stored in the repository or shell history:

```sh
docker run --rm -it -v "${PWD}:/app" -v "${HOME}/.gem:/root/.gem" -w /app ruby:3.2-bullseye gem signin
```

Publish the verified artifact using the saved RubyGems credentials:

```sh
docker run --rm -it -v "${PWD}:/app" -v "${HOME}/.gem:/root/.gem" -w /app ruby:3.2-bullseye gem push dev-portfolio-blog-0.2.0.gem
```

Never commit `.gem/credentials` or an API key. Confirm the published version at [RubyGems](https://rubygems.org/gems/dev-portfolio-blog).

### Read about the themes and how it's implemented [here](https://github.com/rohitjain00/dev-portfolio-blog/wiki/Theme-Management)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

If you like my work, you can buy me a coffee here :smile:

<a href="https://www.buymeacoffee.com/rohitjain00" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
