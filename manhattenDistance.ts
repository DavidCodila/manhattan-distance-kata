import { Point } from "./Point";

export function manhattenDistance(point1: Point, point2: Point): number {
  var distance = point1.getDifferance(point2.getCoordinates());
  return distance;
}
