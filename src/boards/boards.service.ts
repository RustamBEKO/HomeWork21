import { Injectable } from '@nestjs/common';
import { create } from 'domain';
import { title } from 'process';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards = [
    { id: 1, title: 'Board 1', createdAt: new Date().toISOString() },
    { id: 2, title: 'Board 2', createdAt: new Date().toISOString() },
    { id: 3, title: 'Board 3', createdAt: new Date().toISOString() },
  ];

  getBoards() {
    return this.boards;
  }



create(dto: CreateBoardDto) {
  const newBoard = {
    id: this.boards.length + 1,
      title: `Board ${this.boards.length + 1}`,
      createdAt: new Date().toISOString(),
    // title: dto.title,
    // createdAt: dto.createdAt,
  };
  this.boards.push(newBoard);
  return newBoard;
}
}