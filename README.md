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

- [x] 주선자
- [x] 초대
- [x] 인재풀
- [x] 댓글
- [x] 채팅

## graphql resolver

- [x] 회원 가입 (signup)
- [x] 로그인 (signin)
- [x] 회원 초대 (invite)
- [ ] 인재풀 등록 (createSomeone)
- [ ] 인재풀 수정 / 삭제 (updateSomeone)
- [ ] 인재풀 리스트 (SomeoneList)
- [ ] 인재풀 정보 (Someone)
- [ ] 주산자 간 채팅 (chat)
