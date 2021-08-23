import Sizing from "./Sizing";

describe("Sizing", () => {
  test("maps pixels properly", () => {
    const sizing = Sizing.create({ sm: 8, md: 16, lg: 32 });

    expect.assertions(2);
    expect(sizing.toPx()).toEqual({ sm: "8px", md: "16px", lg: "32px" });
    expect(sizing.pxToRem()).toEqual({
      sm: "0.5rem",
      md: "1rem",
      lg: "2rem",
    });
  });

  test("maps rems properly", () => {
    const sizing = Sizing.create({ sm: 1, md: 2, lg: 3 });
    expect(sizing.toRem()).toEqual({ sm: "1rem", md: "2rem", lg: "3rem" });
  });

  test("maps percentage properly", () => {
    const sizing = Sizing.create({ sm: 30, md: 50, lg: 90 });
    expect(sizing.toPct()).toEqual({ sm: "30%", md: "50%", lg: "90%" });
  });

  test("maps decimal properly", () => {
    const sizing = Sizing.create({ sm: 0.3, md: 0.5, lg: 0.9 });
    expect(sizing.decimalToPct()).toEqual({
      sm: "30%",
      md: "50%",
      lg: "90%",
    });
  });

  test("converts to dto", () => {
    const pxSizing = Sizing.create({ sm: 8, md: 16, lg: 32 });
    expect(pxSizing.toDTO()).toEqual({ sm: 8, md: 16, lg: 32 });
  });
});
