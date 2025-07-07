enum Stock {
  green = "green",
  red = "red",
  yellow = "orange",
  greenWidth = "100%",
  yellowWidth = "50%",
  redWidth = "25%",
}

export const stockBar = (stocks: any) => {
  if (stocks > 20) {
    return { width: Stock.greenWidth, color: Stock.green };
  }
  if (stocks < 20 && stocks > 10) {
    return { width: Stock.yellowWidth, color: Stock.yellow };
  }
  if (stocks < 10) {
    return { width: Stock.redWidth, color: Stock.red };
  }
};
