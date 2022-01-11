FROM php:fpm-alpine
RUN apk add --no-cache $PHPIZE_DEPS oniguruma-dev libzip-dev curl-dev \
    && docker-php-ext-install pdo_mysql mbstring zip curl \
    && pecl install xdebug redis \
    && docker-php-ext-enable xdebug redis

WORKDIR /var/www/html
EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000