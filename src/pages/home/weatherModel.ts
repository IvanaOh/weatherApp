export class Weather {
  main: string;
  description: string;

  constructor(public m: string, public desc: string) {
    this.main = m;
    this.description = desc;
  }


}
