# Discriminated Union And Exhaustiveness Checking With Never

    interface Circle{
        kind: "circle",
        radius: number
    }

    interface Square{
        kind: "square"
        side: number
    }

    interface Rectangle{
        kind: "rectangle",
        length: number,
        width: number
    }

    Type Shape = Circle | Square | Rectangle

    function getTrueShape(shape: Shape){
        if(shape.kind === "circle"){
            return math.PI * shape.radius ** 2
        }
        return shape.side * shape.side
    }

    function getArea(shape: Shape){
        switch(shape.kind){
            case "circle":
            return math.PI * shape.radius ** 2

            case "square":
            return shape.side * shape.side;

            case "rectangle":
            return shape.length * shape.width

            default: 
                const _defaultForShape : never = shape
                return _defaultForShape
        }
    }