const array1 = [55, 1, 45, 66, 33 , 3];
const array2 = [18, 7, 4, 66, 1, 55];
const common = [];

for(let i = 0 ; i<array1.length ; i++)
    {
        if(array1.includes(array2[i]))
            {
                common.push(array2[i]);
            }
    }

common.forEach(Element =>
    {
        console.log(Element);
    }
)