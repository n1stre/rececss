jest.mock("fs");

import mockedFS from "fs";
import NodeFS from "./NodeFS";

describe("NodeFileSystem", () => {
  beforeEach(() => {
    (mockedFS as any).__setFileStructure({
      some: {
        file1: "file1 content",
        file2: "file2 content",
      },
      "some/path": {},
    });
  });

  test("writing files into non existing folder", async () => {
    const fs = NodeFS.create();
    const file = { path: "some/unknown/file.txt", contents: "contents" };

    await fs.writeFiles([file]);

    expect(mockedFS.promises.stat).toBeCalledWith("some/unknown");
    expect(mockedFS.promises.mkdir).toBeCalledWith("some/unknown", {
      recursive: true,
    });
    expect(mockedFS.promises.writeFile).toBeCalledWith(
      file.path,
      file.contents,
    );
  });

  test("writing files into existing folder", async () => {
    const fs = NodeFS.create();
    const file = { path: "some/path/file.txt", contents: "contents" };

    await fs.writeFiles([file]);

    expect(mockedFS.promises.stat).toBeCalledWith("some/path");
    expect(mockedFS.promises.mkdir).not.toBeCalled();
    expect(mockedFS.promises.writeFile).toBeCalledWith(
      file.path,
      file.contents,
    );
  });

  test("writing files into invalid path with error", async () => {
    const fs = NodeFS.create();
    const file = {
      path: "invalid/path/.txt",
      contents: "contents",
    };

    let error;
    try {
      await fs.writeFiles([file]);
    } catch (catched) {
      error = catched;
    }

    expect(error).toBeDefined();
  });
});
