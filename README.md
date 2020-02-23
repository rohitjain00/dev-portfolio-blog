 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 [![Gem Version](https://badge.fury.io/rb/dev-portfolio-blog.svg)](https://badge.fury.io/rb/dev-portfolio-blog)
![](https://ruby-gem-downloads-badge.herokuapp.com/dev-portfolio-blog)

[![CodeFactor](https://www.codefactor.io/repository/github/rohitjain00/dev-portfolio-blog/badge)](https://www.codefactor.io/repository/github/rohitjain00/dev-portfolio-blog)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0b9f1c23f564a8195a8588de7895c4c)](https://www.codacy.com/manual/rohitjain00/dev-portfolio-blog?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rohitjain00/dev-portfolio-blog&amp;utm_campaign=Badge_Grade)

# dev-portfolio-blog

This is a minimal jekyll theme for writing blogs and about yourself.

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

    $ bundle

Or install it yourself as:

    $ gem install dev-portfolio-blog

## Usage

To start using the theme you need to follow these steps.

Assuming that you started your first website based on `minima` theme from [here](https://jekyllrb.com/docs/)

1. Create `blog.md` in the root folder ans set its yaml parameters to

```yaml
layout: blog
title: blog
permalink: /blog/
```

2. Change your `about.md` yaml parameters to following

```yaml
layout: description
permalink: /about/
```

3. In the `index.md` file add

```yaml
home_text : [Your Text]
```

4. In the `_congif.yml` file add a key `resume_url` and set it to the path of the Resume. Also add `author_name` to your name to appear on the website.

Path is relative to the root directory
```yaml
resume_url: [PATH_TO_RESUME]
author_name: [YOUR_NAME]
```

### Pagination

Visit [jekyll-paginate-v2](https://github.com/sverrirs/jekyll-paginate-v2/blob/master/README-GENERATOR.md#site-configuration) and add this to your `_config.yml` file to enable pagination.


### Minifier

Visit [Jekyll-minifier](https://github.com/digitalsparky/jekyll-minifier) and add this to your `_config.yml` file to enable minifier.

##### Check [_config.yml](https://github.com/rohitjain00/dev-portfolio-blog/blob/master/_config.yml) for example config file.


## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/[USERNAME]/dev-portfolio-blog/.> This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `dev-portfolio-blog.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

