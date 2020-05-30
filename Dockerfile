FROM heroku/heroku:20

# Install dependencies
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN node --version
RUN npm install -g yarn@2.0.0-rc.27

ADD . /app/

RUN cd /app yarn && yarn micro build && yarn micro bundle

CMD cd /app && yarn micro serve -p $PORT
