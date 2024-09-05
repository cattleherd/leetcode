/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */


/* What i did was initialize empty string, then alternatively grab the first letter of each word.
and every time I reduced the length of the word by 1 character. When a word had no more letters,
I appended the other word at the end.




**Better Solution**
Since each letter is processed exactly once one at a time, the complexity is O(n + m)

You can significanly speed this up by appending the first character of each word at the same time,
this makes it O(n) where n is the length of the longer word.

*/
var mergeAlternately = function(word1, word2) {
    let final = '';
    while(word1.length > 0){
        if(word2.length > 0){
        final += word1.slice(0,1);
        word1 = word1.slice(1);
        }else{
            final+=word1;
            break;
        }
        while(word2.length > 0){
            if(word1.length >0){
            final+=word2.slice(0,1);
            word2 = word2.slice(1);
            break;
            }else{
                final+=word2;
                break;
            }
        }
    }
    return final;
};

mergeAlternately('rofl','mao');