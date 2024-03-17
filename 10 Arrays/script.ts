const superHeroes = [];
//superHeroes.push("spiderman")// will result an error

const superMarvelHeroes: string[] = [];
superMarvelHeroes.push("iron man"); //no error

const heroPower: Array<number> = []; //another but correct syntax
heroPower.push(2);

type User3 = {
  name: string;
  isActive: boolean;
};

const allUser: User3[] = [];

//allUser.push("") // will give the error.

allUser.push({ name: "kartik", isActive: true });

const MLModels: number[][] = [[255, 255, 255], []];
