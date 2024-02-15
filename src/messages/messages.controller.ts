import { Controller, Get, Post, Body, Param, ValidationPipe} from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto'
import { MessageService } from './messages.service';


@Controller('messages')
export class MessagesController {

    messagesService: MessageService;


    constructor() {
        //Don't do this on real app
        //use dependency injection
        
        this.messagesService = new MessageService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessages(@Body(new ValidationPipe()) body: CreateMessageDTO) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessages(@Param("id") id: string) {
        return this.messagesService.findOne(id)
    }

}

