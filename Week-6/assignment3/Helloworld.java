import java.lang.reflect.Array;

// input: {0,1,1,0,1,2,0,1,2}
// outpout: {0,0,0,1,1,1,1,2,2}


class HelloWorld
{
    public static void main(String[] args) 
    {
        int zeroCount = 0;
        int oneCount = 0;
        int[] array = new int[9];

        for(int i = 0; i < array.length; i++){

            if(array[i] == 0){
                zeroCount++;
            }

            if(array[i] == 1){
                oneCount++;
            }

            for(int 0 = 0; i < zeroCount; i++){
                array[i] = 0;
            }

            for(int i =0; i < zeroCount; i++){
                array[i] = 0;

            }

            for(int i = zeroCount; i++){
                array[i] = 0;
            }

            for(int i = zeroCount; i < (zeroCount + oneCount); i++ ){
                array[i] = 0;    
            }

            for(int i = (zeroCount + oneCount);i < array.length;i++){
                array[i] = 2;
            }
            return array;
        }
                  
    }
}

