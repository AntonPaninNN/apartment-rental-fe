
export class Utils {

    static format(text: string, args: string[]) {
        return text.replace(/\{(\d+)\}/g, function(m,n){
            return args[n] ? args[n] : m;
        });
    };

}