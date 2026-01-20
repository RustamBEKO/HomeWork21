import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('all')
  getBoards() {
    return this.boardsService.getBoards();
  }
  @Get(':id')
  getBoardById(@Param('id') id: string) {
    return this.boardsService.getBoardById(Number(id));
  }
  @Post('create')
create(@Body() dto: CreateBoardDto) {
  return this.boardsService.create(dto);
  // Implementation for creating a board goes here
}  
@Patch(':id')
update(@Param('id') id: string, @Body() dto: UpdateBoardDto) {
  return this.boardsService.update(Number(id), dto);
}
@Delete(':id')
delete(@Param('id') id: string) {
  return this.boardsService.delete(Number(id));
  // Implementation for deleting a board goes here  
}
}