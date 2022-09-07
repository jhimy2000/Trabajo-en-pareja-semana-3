(()=>
{
    type UserID=string|number|boolean;//exclusivo de tipe alias type
    let userId: UserID

    
//literal types
type Sizes='S'|'M'|'L'|'XL';
let shirtSize:Sizes;
shirtSize='M';
shirtSize='L';
shirtSize='XL';
// shirtSize='Mdeecee';

function greeting(userId:UserID,shirtSize:Sizes)
    {
        if (typeof userId==='string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting(1213,'M');
})();