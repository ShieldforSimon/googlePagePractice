export type ItemType = {
    id: number;
    name: string;
};
export declare class SearchController {
    getSearchResult(query: string): Promise<{
        icon: string;
        title: string;
        url: string;
        text: string;
    }[] | {
        error: string;
    }>;
    getSearchHistory(): Promise<ItemType[]>;
    deleteItem(name: string): ItemType[];
}
