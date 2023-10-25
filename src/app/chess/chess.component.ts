import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit{
  
  chessboard!: number[][];
  
  ngOnInit(): void {
    this.initalizeChessBoard();
  }
  
  initalizeChessBoard() {
    this.chessboard = new Array(8).fill(null)
      .map(() => new Array(8).fill(null)
      .map((cell, columnIndex) => columnIndex)
    );
  }

  toggleSquareColor(squareRef: HTMLDivElement) {
    squareRef.classList.toggle('clicked')

    // ! Another Logic with Condition Checking
    // if(squareRef.classList.contains('clicked')){
    //   squareRef.classList.remove('clicked')
    // }else{
    //   squareRef.classList.add('clicked')
    // }
  }
}
