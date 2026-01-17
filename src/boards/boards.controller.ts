import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('all')
  getBoards() {
    return this.boardsService.getBoards();
  }
  @Post('create')
create(@Body() dto: CreateBoardDto) {
  return this.boardsService.create(dto);
  // Implementation for creating a board goes here
}  
}
