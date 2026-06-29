FROM ruby:3.2-bullseye

RUN apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile Gemfile.lock dev-portfolio-blog.gemspec ./
RUN bundle install

COPY . .

# Fail the image build if the site cannot be compiled.
RUN bundle exec jekyll build

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4000", "--force_polling"]
