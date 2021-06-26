import {Controller,Get,Post,Res,HttpStatus} from '@nestjs/common';
import {Response} from 'express';
import {AppService} from './app.service';
const plivo = require('plivo');

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/outbound')
    sendSMS() {
        const client = new plivo.Client('','');
        client.messages.create(
                '+17253737999',
                '+33633807171',
                'Hello, from Nest!',
            )
            .then(
                function(response) {
                    console.log(response);
                },
                function(err) {
                    console.error(err);
                },
            );
    }
}
