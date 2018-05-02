
class Helper{
    static appendU8A(bufferA,bufferB){
        let aLength = bufferA.length;
        let res = new Uint8Array(aLength+bufferB.length);
        
        res.set(bufferA);
        res.set(bufferB,aLength);

        return res;
    }
}

export default Helper;