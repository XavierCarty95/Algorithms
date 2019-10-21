// This algorithms sums up all number between the array that user enters
//ex [4,1] should return 10 
// number all inclusive number order doesnt matter 
// Helper function if parameters are reverse

function sumHelper([num1, num2]) {
    let sum = 0;


    if (num2 > num1) {
        let count = num2;
        let count1 = num1;



        while (count1 <= count) {
            sum += count
            count--
        }


        return sum
    }


}




function sumAll([num1, num2]) {




    if (num1 > num2) {


        let count = num1
        let count2 = num2
        let sum = 0;


        while (count >= count2) {


            sum += count
            count--
        }
        return sum
    } else {
        (num2 > num1)
        var sum = sumHelper([num1, num2])


        return sum


    }




}