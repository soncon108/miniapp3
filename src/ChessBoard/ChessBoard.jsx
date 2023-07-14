import "./ChessBoard.css";
import { useState } from "react";

function ChessBoard() {
  const [size, setSize] = useState(5);
  const [chessBoard, setChessBoard] = useState([]);
  const [evenColor, setEvenColor] = useState("#FFFFFF");
  const [oddColor, setOddColor] = useState("#000000");

  const generateChessBoard = (size) => {
    const result = [];
    for (let i = 0; i < size; i++) {
      const row = Array.from({ length: size }, (_, index) =>
        index % 2 === i % 2 ? "even" : "odd"
      );
      result.push(row);
    }
    return result;
  };

  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
    setChessBoard(generateChessBoard(newSize));
  };
  const handleEvenColorChange = (event) => {
    setEvenColor(event.target.value);
  };

  const handleOddColorChange = (event) => {
    setOddColor(event.target.value);
  };

  const handleBoardClick = () => {
    const newChessBoard = chessBoard.map((row) => {
      return row.map((value) => {
        return value === "even" ? "odd" : "even";
      });
    });
    setChessBoard(newChessBoard);
  };

  useState(() => {
    setChessBoard(generateChessBoard(size));
  }, [size]);

  return (
    <>
      <div className="containerChess">
        <h1 className="titleChess">CHESS BOARD</h1>
        <div className="inputThree">
          <div>
            <label htmlFor="size">Nhập độ dài bàn cờ:</label>
            <input
              type="number"
              id="size"
              name="size"
              value={size}
              onChange={handleSizeChange}
            />
          </div>

          <div>
            <label htmlFor="evenColor">Màu sắc ô chẵn:</label>
            <input
              type="color"
              id="evenColor"
              name="evenColor"
              value={evenColor}
              onChange={handleEvenColorChange}
            />
          </div>
          <div>
            <label htmlFor="oddColor">Màu sắc ô lẻ:</label>
            <input
              type="color"
              id="oddColor"
              name="oddColor"
              value={oddColor}
              onChange={handleOddColorChange}
            />
          </div>
        </div>

        <div className="chessBoard" onClick={handleBoardClick}>
          {chessBoard.length > 0 &&
            chessBoard.map((row, rIndex) => {
              return (
                <div className="row" key={rIndex}>
                  {row.map((value, cIndex) => {
                    const color = value === "even" ? evenColor : oddColor;
                    return (
                      <div
                        className="box"
                        key={cIndex}
                        style={{
                          backgroundColor: color,
                        }}
                      ></div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ChessBoard;
