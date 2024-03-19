# Abstract Classes in TypeScript

    class TakePhoto{
        constructor(
            public cameraMode: string,
            public filter: string,
        ){}
    }


    const kn = new TakePhoto("Test", "Test")

now this code is ok and it has no Errors but when we make this class as abstract class

    abstract class TakePhoto{
        .....
        .....
    }

    const kn = new TakePhoto("Test", Test")

this will show us an error

    Cannot create an instance of an abstract class.

means you can't create an object of an abstract class what you can do is just use it as blueprint and inherit it's properties.

    class Instagram extends TakePhoto{

    }

    const kn = new Instagram("Test" , "Test")

now this is totally valid.

Now one more thing we will do


    abstract class TakePhoto{
        constructor(
            public cameraMode: string,
            public filter: string,
        )
        abstract getSepia : void()
        {}
        getReelTime():number{
            return 8
        }
    }


    class Instagram extends TakePhoto{
        constructor(
            public cameraMode: string,
            public filter: string,
            public burst: number,
        ){
            super(cameraMode, filter)
        }
        getSepia():void{
            console.log("sepia");
        }

    }

    const kn = new Instagram("test", "test",3);
    kn.getReelTime();

Now see we didn't use the getReelTime in Instagram and it's giving no error that's what abstract classes does.
    