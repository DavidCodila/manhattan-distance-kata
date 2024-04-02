import { test, expect } from "bun:test";
import { manhattenDistance } from "./manhattenDistance";
import { Point } from "./Point";

test("get distance between two points", () => {
  var point1 = new Point(1, 2);
  var point2 = new Point(3, 4);
  var result = manhattenDistance(point1, point2);
  expect(result).toEqual(4);
});
