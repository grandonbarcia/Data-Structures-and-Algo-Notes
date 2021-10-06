const LinkedList = require("./linkedLists");

describe("#inserAthead", () => {
  test("it adds the element to the beginning of the list", () => {
    const ll = new LinkedList();
    ll.insertAtHead(20);
    const oldHead = ll.head;
    ll.insertAtHead(30);
    expect(ll.head.value).toBe(30);
    expect(ll.head.next).toBe(oldHead);
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(20, 30);
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(20, 30);
      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("width index 0", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });
});
