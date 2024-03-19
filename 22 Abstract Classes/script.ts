abstract class TakePhoto2{
    constructor(
        public cameraMode: string,
        public filter: string,
    )
    {}
    abstract getSepia() : void; 
    getReelTime():number{
        return 8;
    };
}


class Instagram2 extends TakePhoto2{
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

const kn = new Instagram2("test", "test",3);
kn.getSepia();
kn.getReelTime();
