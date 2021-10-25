export interface allChars {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: [
        {
            id: 1;
            name: string;
            status: string;
            species: string;
            type: string;
            gender: string;
            origin: {
                name: string;
                url: string;
            };
            location: {
                name: string;
                url: string;
            };
            image: string;
            episode: [];
            url: string;
            created: Date;
        }
    ];
}
