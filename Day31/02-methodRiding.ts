

class BaseBank{ // parent class

    public interestRate(): void{
        console.log(`Interest rate is 4%`);
    }

}


class SBIBank extends BaseBank{ // child class / Derived class

    public interestRate(): void{
        console.log(`Interest rate is 6%`);
    }
}

const loginPage = new SBIBank();

loginPage.interestRate(); // it will call the child class method, this is called method riding, it is a feature of OOPs, it allows us to override the parent class method in the child class, so that we can provide our own implementation of the method in the child class, and when we call the method using the child class object, it will call the child class method instead of the parent class method.