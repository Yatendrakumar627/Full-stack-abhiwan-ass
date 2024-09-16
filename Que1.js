function getPascalRow(rowIndex) {
  let row = new Array(rowIndex + 1).fill(1); // Initialize the row with 1s

  // Calculate each value in the row using the previous values
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }

  return row;
}

// Function to print the Pascal's Triangle row as a pyramid
function printPyramid(rowIndex) {
  let row = getPascalRow(rowIndex);

  // Calculate the width for formatting
  const width = row.join(" ").length;

  // Print each value centered
  for (let i = 0; i <= rowIndex; i++) {
    let line = "";
    // Add spaces for alignment
    for (let j = 0; j < (rowIndex - i) * 2; j++) {
      line += " ";
    }
    // Add numbers
    for (let k = 0; k <= i; k++) {
      line += row[k] + " ";
    }
    console.log(line.trim());
  }
}

// Example usage
printPyramid(4);
