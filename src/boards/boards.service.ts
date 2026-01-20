import { Injectable, NotFoundException } from '@nestjs/common';
import { create } from 'domain';
import { title } from 'process';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardsService {
  private boards = [
    { id: 1, title: 'Board 1', description: '', createdAt: new Date().toISOString() },
    { id: 2, title: 'Board 2', description: '', createdAt: new Date().toISOString() },
    { id: 3, title: 'Board 3', description: '', createdAt: new Date().toISOString() },
  ];

  getBoards() {
    return this.boards;
  }
  getBoardById(id: number) {
    const board = this.boards.find((board) => board.id === id);
    if (!board) {
      throw new NotFoundException('Board not found');
    }
    return board;
  }

  create(dto: CreateBoardDto) {
    const newBoard = {
      id: this.boards.length + 1,
      title: `Board ${this.boards.length + 1}`,
      description: '',
      createdAt: new Date().toISOString(),
      // title: dto.title,
      // createdAt: dto.createdAt,
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, dto: UpdateBoardDto) {
    const board = this.getBoardById(id);
    if (dto.title !== undefined) {
      board.title = dto.title;
    }
    if (dto.description !== undefined) {
      board.description = dto.description;
    }
    return board;
  }
  remove(id: number) {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index === -1) {
      throw new NotFoundException('Board not found');
    }
    const deletedBoard = this.boards.splice(index, 1);
    return deletedBoard[0];
  }

}
