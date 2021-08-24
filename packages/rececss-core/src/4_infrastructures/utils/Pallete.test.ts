import Pallete from "./Pallete";

describe("Pallete", () => {
  test("create from shades", () => {
    const pallete = Pallete.fromShades("main", "#ff5722", 10);

    // sass functions output are used as expected values
    expect(pallete.toDTO()).toMatchObject({
      main: "#ff5722",
      main100: "#fff2ee",
      main200: "#ffcbbb",
      main300: "#ffa588",
      main400: "#ff7e55",
      main500: "#ff5722",
      main600: "#ee3900",
      main700: "#bb2d00",
      main800: "#882100",
      main900: "#551400",
    });
  });
});
