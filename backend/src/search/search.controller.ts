import { Controller, Delete, Get, Query } from "@nestjs/common";

export type ItemType = {
  id: number;
  name: string;
};

const historyArr: ItemType[] = [
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

@Controller("search")
export class SearchController {
  @Get()
  async getSearchResult(@Query("query") query: string) {
    if (query.toLowerCase().includes("sex")) {
      return { error: "搜索关键字包含色情内容" };
    }

    return searchWebData.filter((i) => i.title.includes(query));
  }

  @Get("history")
  getSearchHistory() {
    // const delaySeconds = Math.floor(Math.random() * 5 + 1);
    // await new Promise((resolve) => setTimeout(resolve, delaySeconds * 1000));
    return historyArr;
  }

  @Delete()
  deleteItem(@Query("id") id: number) {
    const index = historyArr.findIndex((item) => item.id === id);
    if (index !== -1) {
      return historyArr.splice(index, 1);
    }
  }
}
