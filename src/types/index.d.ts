export = uritemplate;

declare class uritemplate {
    constructor(templateText: any, expressions: any);

    expand(variables: any): any;

    toString(): any;

    static parse(uriTemplateText: any): any;

}

declare namespace uritemplate {
    class UriTemplateError {
        constructor(options: any);

        toString(): any;

    }

}

