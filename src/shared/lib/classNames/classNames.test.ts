import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass", {}, [])).toBe("someClass");
  });

  test("with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2",
    );
  });

  test("with mods", () => {
    expect(
      classNames("someClass", { hovered: true, hidden: false }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hovered");
  });

  test("with undefined mod", () => {
    expect(
      classNames("someClass", { hovered: undefined, hidden: true }, [
        "class1",
        "class2",
      ]),
    ).toBe("someClass class1 class2 hidden");
  });
});
