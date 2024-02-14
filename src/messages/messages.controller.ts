import { Controller, Get, Post, Body, Param, ValidationPipe} from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto'

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {}

    @Post()
    createMessages(@Body(new ValidationPipe()) body: CreateMessageDTO) {
        console.log(body);
    }

    @Get('/:id')
    getMessages(@Param("id") id: string) {
        console.log(id);
    }

}

