const colors = [
  '#B2EEE4',
  '#B2DAEE',
  '#B2BCEE',
  '#C6B2EE',
  '#E4B2EE',
  '#EEB2DA',
  '#25CED1',
  '#FFFFFF',
  '#FCDCC7',
  '#FF8A5B',
  '#EA526F',
]
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const columnWidth = 150
const rowHeight = 100
const fontSize = 36


const color_lst = [
  "#73b87e",
  "#94bd77",
  "#b0be6e",
  "#d4c86a",
  "#d4c86a",
  "#d4c86a",
  "#ecac67",
  "#e79a69",
  "#e2886c",
];

const col_width = 2000;
const col_height = 400;
const numCols = 9;
const numRows = 9;


function drawTemplate(labels) {

  const startY = Math.trunc(col_height*numRows/2);
  const stopY = -startY;
  const startX = Math.trunc(col_width*numCols/2);
  const stopX = - startX;


  const widgets = []
  for ( let i = 0; i < numRows; ++i)
  {
    widgets.push(getImpactShape(math.trunc(-col_width/2,startY - i*col_height,color_lst[i])));

  }

  // for (let rowIdx = 0; rowIdx < labels.length; rowIdx++) {
  //   const rowY = rowIdx * rowHeight + 10 * rowIdx
  //   const rowLabel = labels[rowIdx]
  //   const rowColor = getRowColor(rowIdx)
  //   if (rowLabel) {
  //     widgets.push(getRowLabel(rowLabel, rowY, rowColor))
  //   }
  //   for (let colIdx = 0; colIdx < workDays.length; colIdx++) {
  //     const colX = colIdx * columnWidth + 2 * colIdx
  //     if (rowIdx === 0) {
  //       widgets.push(getColumnLabel(colIdx, colX))
  //     }
  //     widgets.push(getShape(colX, rowY, rowColor))
  //   }
  // }
  miro.board.widgets.create(widgets)
}

function getImpactShape(x, y, color) {
  return {
    type: "shape",
    x: x,
    y: y,
    width: col_width,
    height: col_height,
    style: {
      borderWidth: 2.0,
      borderOpacity: .5,
      borderStyle: "normal",
      backgroundColor: color,
    },
  };
}


function getShape(x, y, color) {
  return {
    type: 'shape',
    x: x,
    y: y,
    width: columnWidth,
    height: rowHeight,
    style: {
      borderWidth: 0,
      backgroundColor: color,
    },
  }
}

function getRowLabel(text, y, color) {
  return {
    type: 'text',
    x: -(columnWidth / 2 + fontSize),
    y: y,
    text: text,
    width: columnWidth,
    height: fontSize,
    rotation: 270,
    style: {
      fontSize: fontSize,
      textColor: color,
      textAlign: 'c',
    },
  }
}

function getColumnLabel(colIdx, x) {
  return {
    type: 'text',
    x: x,
    y: -(rowHeight / 2 + fontSize),
    text: workDays[colIdx],
    width: columnWidth,
    height: fontSize,
    style: {
      fontSize: fontSize,
      textColor: '#555',
      textAlign: 'c',
    },
  }
}

function getRowColor(index) {
  return colors[index % colors.length]
}
