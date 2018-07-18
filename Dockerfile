FROM ubuntu:16.04

MAINTAINER Angad Dubey

RUN apt-get update && apt-get -yqq upgrade

RUN apt-get install -yqq language-pack-en-base \
    && export LC_ALL=en_US.UTF-8 \
    && export LANG=en_US.UTF-8 \
    && apt-get -yqq install software-properties-common python-software-properties \
    && add-apt-repository ppa:ondrej/php

# Install everything the app requires
RUN apt-get clean && apt-get update \
    && apt-get -yqq install \
    apache2 \
    nodejs \
    php7.2 \
    php7.2-curl \
    php7.2-mbstring \
    php7.2-xml \
    php7.2-zip \
    libapache2-mod-php7.2 \
    php7.2-mysql \
    git \
    supervisor \
    && apt-get -y autoremove \
    && apt-get clean \
    && php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* \
    && ln -sf /dev/stdout /var/log/apache2/access.log \
    && ln -sf /dev/stderr /var/log/apache2/error.log

# Add dir conf file to apache
ADD docker-conf/apache2/dir.conf /etc/apache2/mods-enabled/

ADD docker-conf/apache2/000-default.conf /etc/apache2/sites-enabled/

# Enable a2enmod
RUN a2enmod rewrite

# Restart apache
RUN service apache2 restart

# Configure supervisord
ADD docker-conf/supervisor/supervisord.conf /etc/supervisor/

# Add supervisor
ADD docker-conf/supervisor/supervisor_conf/* /etc/supervisor/conf.d/

# Expose ports
EXPOSE 80
EXPOSE 443

WORKDIR /var/www

CMD ["/usr/bin/supervisord"]