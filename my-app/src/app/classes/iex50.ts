export interface IExercise50 {
  BookId: string,
  BookName: string,
  Price: number,
  Meta: string,
  Image: string,
  Date: string,
  Inventory: number,
  CDId: number,
  NXBId: number
}

export class Ex50 {
    constructor(
    public BookName: string = "",
    public Price: number = 0,
    public Meta: string = "",
    public Image: string = "",
    public Date: string = "",
    public Inventory: number = 0,
    public CDId: number = 0,
    public NXBId: number = 0
    ) {}
}