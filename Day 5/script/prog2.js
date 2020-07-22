console.log("login the user");

class User{
    constuctor(name,age,email){
        this.name=name;
        this.age=age;
        this.email;
        this.luCoins=0;
        this.courses=[];
    }
        greet(){
            console.log("hi");
        }
        login(){
            console.log(`${this.name}has logged in`);
            return this;
        }
        logout(){
            console.log(`${this.name}has logged out`);
            return this;
            
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name}has ${this.luCoins}coins`);
            return this;
        }
        deleteCoins(){
            this.luCoins--;
            console.log(`${this.name}has ${this.luCoins}coins`);
            return this;
        }
        getDetail(){
            console.log('Name is ${this.name},email is${this.email}');
        return this;
        }

    

    }
    class Moderator extends User{
        constructor(name,age,email,role){
            super(name,age,email);
            this.role = role;
        }
    
        deleteUser(user){
            users = users.filter(u =>{
                return u.email != user.email; 
            })
        }
    
    }
    
    class Admin extends Moderator{
       addCourse(user,course){
           user.courses.push(course);
           console.log(user);
       }
    }
    
    
    let user1 = new User('Dilip',25,'dilip@gmail.com')
    let user2 = new User('Krishnan',24,'k@gmai.com')
    let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
    let admin = new Admin('Rio',25,'r@gmail.com');
    let users = [user1,user2,mod,admin];
    
    users.forEach(element => {
        console.log(element);
    });
    
    User.greet();
    admin.addCourse(user1,'Javascript');
    admin.addCourse(user1,'Python');
    