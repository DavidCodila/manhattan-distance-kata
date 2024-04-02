export class Point {
  private x: number;
  private y: number;
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  public getCoordinates(): number[] {
    var coordinates = [this.x, this.y];
    return coordinates;
  }
  public getDifferance(location: number[]): number {
    var distance = location[0] - this.x + location[1] - this.y;
    return distance;
  }
}
