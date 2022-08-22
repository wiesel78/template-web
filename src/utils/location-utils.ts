export function getParamFromSearch(search : string, name : string) : string | undefined {
    const trimmed = search.startsWith("?") ? search.substring(1, search.length) : search;
    const splitted = trimmed.split('&')
        .map(x => x.split('='))
        .filter(x => x.length > 0)
        .map(x => {
            if(x.length === 1)
                x.push("true");
            
            return x;
        });

    return splitted.find(x => x[0] === name)?.[1];
}