import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constants';

import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) {}

    @MessagePattern(UserMSG.CREATE)
    create(@Payload() userDto: UserDto) {
        return this.userService.create(userDto);
    }

    @MessagePattern(UserMSG.FIND_ALL)
    findAll() {
        return this.userService.findAll();
    }

    @MessagePattern(UserMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.userService.findOne(id);
    }

    @MessagePattern(UserMSG.UPDATE)
    update(@Payload() payload: any) {
        return this.userService.update(payload.id, payload.userDto);
    }

    @MessagePattern(UserMSG.DELETE)
    delete(@Payload() id: string) {
        return this.userService.delete(id);
    }
}
