## 환경 변수

1. JWT_SECRET

## 서버 구조

    database - prisma - graphql server - client

- database 접근은 prisma 에서만 가능
- prisma 접근은 graphql 서버에서만 가능
- graphql server 접근은 어디에서나 가능
- graphql server 접근 제어는 JWT 토큰 이용

### todo

- [x] prisma
- [x] graphql server
- [x] graphql query test

## data model

## graphql resolver
