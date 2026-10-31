import LinkedList from "."

describe("LinkedList", () => {
  test("appends a node to the end of the list", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");

    expect(list.size).toBe(2);
    expect(list.head.value).toBe("A");
    expect(list.tail.value).toBe("B");
  });

  test("prepends a node to the beginning of the list", () => {
    const list = new LinkedList();

    list.prepend("B");
    list.prepend("A");

    expect(list.size).toBe(2);
    expect(list.head.value).toBe("A");
    expect(list.tail.value).toBe("B");
  });

  test("returns the node at the specified index", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");
    list.append("C");

    expect(list.at(0).value).toBe("A");
    expect(list.at(1).value).toBe("B");
    expect(list.at(2).value).toBe("C");
  });

  test("returns undefined when the index is out of bounds", () => {
    const list = new LinkedList();

    list.append("A");

    expect(list.at(1)).toBeUndefined();
    expect(list.at(5)).toBeUndefined();
  });

  test("checks whether the list contains a value", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");

    expect(list.contains("A")).toBe(true);
    expect(list.contains("B")).toBe(true);
    expect(list.contains("C")).toBe(false);
  });

  test("returns the index of the node containing the specified value", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");
    list.append("C");

    expect(list.findIndex("A")).toBe(0);
    expect(list.findIndex("B")).toBe(1);
    expect(list.findIndex("C")).toBe(2);
  });

  test("returns -1 when the value is not found", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");

    expect(list.findIndex("C")).toBe(-1);
  });

  test("converts the list to a string", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");
    list.append("C");

    expect(list.toString()).toBe("A -> B -> C -> null");
  });

  test("returns an empty string when the list is empty", () => {
    const list = new LinkedList();

    expect(list.toString()).toBe("");
  });

  test("inserts nodes at the specified index", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("D");

    list.insertAt(1, "B", "C");

    expect(list.toString()).toBe("A -> B -> C -> D -> null");
    expect(list.size).toBe(4);
  });

  test("inserts nodes at the beginning of the list", () => {
    const list = new LinkedList();

    list.append("B");
    list.insertAt(0, "A");

    expect(list.head.value).toBe("A");
    expect(list.toString()).toBe("A -> B -> null");
  });

  test("inserts nodes at the end of the list", () => {
    const list = new LinkedList();

    list.append("A");
    list.insertAt(1, "B");

    expect(list.tail.value).toBe("B");
    expect(list.toString()).toBe("A -> B -> null");
  });

  test("does not change the list when no values are provided", () => {
    const list = new LinkedList();

    list.append("A");

    list.insertAt(1);

    expect(list.toString()).toBe("A -> null");
    expect(list.size).toBe(1);
  });

  test("throws a RangeError when inserting at an invalid index", () => {
    const list = new LinkedList();

    list.append("A");

    expect(() => list.insertAt(-1, "B")).toThrow(RangeError);
    expect(() => list.insertAt(2, "B")).toThrow(RangeError);
  });

  test("removes the node at the specified index", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");
    list.append("C");

    list.removeAt(1);

    expect(list.toString()).toBe("A -> C -> null");
    expect(list.size).toBe(2);
  });

  test("removes the first node", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");

    list.removeAt(0);

    expect(list.head.value).toBe("B");
    expect(list.size).toBe(1);
  });

  test("removes the last node", () => {
    const list = new LinkedList();

    list.append("A");
    list.append("B");

    list.removeAt(1);

    expect(list.tail.value).toBe("A");
    expect(list.size).toBe(1);
  });

  test("throws a RangeError when removing at an invalid index", () => {
    const list = new LinkedList();

    list.append("A");

    expect(() => list.removeAt(-1)).toThrow(RangeError);
    expect(() => list.removeAt(1)).toThrow(RangeError);
  });
});