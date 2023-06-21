FROM maven:3.8.4-jdk-11-slim AS build

WORKDIR /app

COPY pom.xml .

RUN mvn -B dependency:resolve

COPY src ./src

RUN mvn clean package -DskipTests

FROM openjdk:11

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]