# Importance of Using Interfaces in TypeScript

    interface TakePhoto {
        cameraMode: string,
        filter: string,
        burst: number,

    }

    class Instagram implements TakePhoto{

    }

Now if we try to create it with the properties specified in interface iw will show us Error.
That's the importance of interface that when you are building an app and you want TakePhoto feture in your app then these are the specified properties which should be there in your app.

    class Instagram implements TakePhoto{
        constructor(
            public cameraMode: string,
            public filter: string,
            public burst: number,
        ){
        }
    }


Now let's say that i am trying to build another app which also implements the properties of TakePhoto interface:-

    class YouTube implements TakePhoto{
        constructor(
            public cameraMode: string,
            public filter: string,
            public burst: number,
            public short: string,
            ){}
    }

this will show us no Error that means that we at least need properties of interface in implemented class but if there are more properties in that class then it will not cause an error.