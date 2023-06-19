FROM maven
COPY . /app
RUN 'mvn clean package'
WORKDIR ./target
RUN 'java -jar *.war'