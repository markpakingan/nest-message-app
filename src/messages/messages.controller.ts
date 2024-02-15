import { Controller, Get, Post, Body, Param, ValidationPipe, NotFoundException} from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto'
import { MessageService } from './messages.service';


@Controller('messages')
export class MessagesController {

    constructor(public messagesService : MessageService) {        
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
    async getMessages(@Param("id") id: string) {
        const message =  await this.messagesService.findOne(id);
        
        if(!message){
            throw new NotFoundException("message not found")
        }
        
        return message;
    }

}

