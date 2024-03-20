# The in Operator Narrowing

        interface User{
            name: string,
            email: string,
        }

        interface Admin{
            name: string,
            email: string,
            isAdmin: boolean
        }

        function isAdmin(account : User | Admin){
            if("isAdmin" in account){
                return account.isAdmin
            }
        }

That's how you can check that whether the isAdmin property is present in the `account` variable or not. That's an another way of Type Narrowing.