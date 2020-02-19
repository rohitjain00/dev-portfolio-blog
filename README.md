 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 [![Gem Version](https://badge.fury.io/rb/dev-portfolio-blog.svg)](https://badge.fury.io/rb/dev-portfolio-blog)


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

To start using the theme you need to create and edit some extra files in the root directory

1. Create `blog.md` in the root folder ans set its yaml parameters to

```yaml
layout: blog
permalink: /blog/
```

2. Change your `about.md` yaml parameters to following

```yaml
layout: description
permalink: /about/
```

3. In the `_congif.yml` file add a key `resume_url` and set it to the path of the Resume.

For example if the Resume is located in the root directory

```yaml
resume_url: 'Resume.pdf'
```

4. In the `index.md` file add

```yaml
home_text : some-text
author_name: your-name
```

Replace "some-text" with your text

Replace "your-name" with your name

## Contributing

Bug reports and pull requests are welcome on GitHub at <https://github.com/[USERNAME]/dev-portfolio-blog/.> This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `dev-portfolio-blog.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

