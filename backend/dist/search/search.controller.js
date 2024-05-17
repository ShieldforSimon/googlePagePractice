"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const historyArr = [
    { id: 1, name: "购物" },
    { id: 2, name: "新闻" },
    { id: 3, name: "视频" },
    { id: 4, name: "音乐" },
    { id: 5, name: "电影" },
    { id: 6, name: "游戏" },
    { id: 7, name: "学习" },
];
const searchWebData = [
    {
        icon: "LogoutOutlined",
        title: "Home",
        url: "https://example.com/home",
        text: "Welcome to our homepage! Discover the latest trends, shop our collections, and find inspiration for your home decor. Whether you are looking for furniture, accessories, or home improvement ideas, we have everything you need to create your dream home",
    },
    {
        icon: "FullscreenExitOutlined",
        title: "Profilewww",
        url: "https://example.com/profilewww",
        text: "Create your wishlist and save your favorite items for later. Whether you are planning a future purchase or just browsing, the wishlist feature allows you to keep track of products you love. Share your wishlist with friends and family for gift ideas.",
    },
    {
        icon: "SortAscendingOutlined",
        title: "Wishlist",
        url: "https://example.com/wishlist",
        text: "View your wishlist",
    },
    {
        icon: "TwitterOutlined",
        title: "Settings",
        url: "https://example.com/settings",
        text: "Customize your settings to personalize your experience. From notification preferences to language settings, you have control over how you interact with our platform. Adjust your settings to suit your preferences and make the most of our features.",
    },
    {
        icon: "LogoutOutlined",
        title: "jackson",
        url: "https://example.com/home",
        text: "Welcome to our homepage! Discover the latest trends, shop our collections, and find inspiration for your home decor. Whether you are looking for furniture, accessories, or home improvement ideas, we have everything you need to create your dream home",
    },
    {
        icon: "FullscreenExitOutlined",
        title: "Hkkdsp",
        url: "https://example.com/profilewww",
        text: "Create your wishlist and save your favorite items for later. Whether you are planning a future purchase or just browsing, the wishlist feature allows you to keep track of products you love. Share your wishlist with friends and family for gift ideas.",
    },
];
let SearchController = class SearchController {
    async getSearchResult(query) {
        try {
            if (query.toLowerCase().includes("sex")) {
                return { error: "搜索关键字包含色情内容" };
            }
            else {
                return searchWebData.filter((i) => i.title.includes(query)) || [];
            }
        }
        catch (error) {
            console.error("搜索出现错误:", error.message);
            return { error: "搜索出现错误，请稍后再试" };
        }
    }
    async getSearchHistory() {
        const delaySeconds = Math.floor(Math.random() * 5 + 1);
        await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));
        return historyArr;
    }
    deleteItem(name) {
        const index = historyArr.findIndex((item) => item.name === name);
        index !== -1 && historyArr.splice(index, 1);
        return historyArr;
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("query")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getSearchResult", null);
__decorate([
    (0, common_1.Get)("history"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getSearchHistory", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SearchController.prototype, "deleteItem", null);
exports.SearchController = SearchController = __decorate([
    (0, common_1.Controller)("search")
], SearchController);
//# sourceMappingURL=search.controller.js.map