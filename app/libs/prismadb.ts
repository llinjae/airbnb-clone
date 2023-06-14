import { PrismaClient } from '@prisma/client';

// 전역 스코프에 prisma 변수를 선언
declare global {
  var prisma: PrismaClient | undefined;
}

// client 상수는 globalThis.prisma가 존재하는 경우 해당 값을 사용하거나, 그렇지 않으면 new PrismaClient()를 통해 새로운 PrismaClient 인스턴스를 생성
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
