function longestCommonPrefix(strs: string[]): string {
    let longestPrefix = "";
    strs.sort()
    for(let i=0;i<strs[0].length;i++){
        if(strs[0][i]==strs[strs.length-1][i]){
            longestPrefix+=strs[0][i];
        }else{
            break;
        }
    }
    return longestPrefix;
};
