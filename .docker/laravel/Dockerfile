FROM ubuntu:latest

LABEL maintainer="MrLijan - liramj21@gmail.com"

WORKDIR /var/www/html


RUN apt update \
    && apt install curl -y \
    && apt install zip unzip software-properties-common -y \
    && add-apt-repository ppa:ondrej/php \
    && apt install -y php8.0 php8.0-gd php8.0-mbstring php8.0-xml php-zip \
    && apt install apache2 libapache2-mod-php8.0 -y \
    && apt update \
    && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && chmod +x /usr/local/bin/composer

RUN echo "deb http://ppa.launchpad.net/ondrej/apache2/ubuntu hirsute main" > /etc/apt/sources.list.d/ppa_ondrej_apache2.list \
    && apt-get update \
    && apt install php8.0-mongodb -y

CMD php artisan serve --host=0.0.0.0 --port=8000



