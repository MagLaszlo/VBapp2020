export class Team {
    teszt1: string = "";
    teszt2: string = "";
    teszt3: string = "";

    constructor(content?: {}){
        if (content) {
            for (var k in content) {
                this[k]= content[k] || "";
            }
        }
    }
}
