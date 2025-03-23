import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService, } from './prisma.server';
import{CreateNotificationBody}from './create-notification-body'
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService,) {}

  @Get()
  List() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() bory:CreateNotificationBody) {
   const { category,content,recipientId} = bory

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content ,
        category,
        recipientId,
      },
    });
  }
}
