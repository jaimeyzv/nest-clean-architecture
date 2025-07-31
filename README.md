## Clean Architecture with Nest JS

## Description

Although I haven’t published a previous article on this topic, I’ve had the opportunity to work on several real-world projects — many of them based in the United States — where we implemented microservices using [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) principles.

<p align="center">
  <a 
    href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" 
    target="blank"
  >
    <img 
      src="https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg"
      width="75%" 
      alt="Nest Logo" 
    />
  </a>
</p>

Recently, I’ve been working with NestJS and TypeScript, and I found it to be the perfect combination to bring structure and scalability to Node.js applications. The robust typing system of TypeScript, combined with the modular and opinionated design of NestJS, provides a powerful foundation for building maintainable APIs.

Coming from a background that values SOLID principles and object-oriented design, it felt natural to apply those principles while designing services, use cases, and domain models.

Like any architectural approach, Clean Architecture involves trade-offs. It's important to strike the right balance — avoiding unnecessary complexity or over-abstraction, while still maintaining flexibility and separation of concerns.

In my projects, we've adopted the concepts proposed by Robert C. Martin (Uncle Bob) and combined them with ideas from Hexagonal Architecture, Onion Architecture, and Screaming Architecture. The goal has always been to make the application resilient to change, especially given how often client requirements evolve — which, as we all know, is a certainty in software development.

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Jaime Zamora](https://github.com/jaimeyzv)

## License

Nest is [MIT licensed](LICENSE).
