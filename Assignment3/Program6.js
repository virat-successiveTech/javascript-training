// 6. Write a program to display prime numbers from 1 to 50

function Prime ()
{
    console.log("The prime numbers between 1 to 50 are");
    for(let i=1;i<=50;i++){
        let c=0;

        for(let j=1 ; j<=i;j++)
        {
            if(i%j==0)
                c+=1;
        }
        if(c==2)
            console.log(i);
    }
}
Prime();