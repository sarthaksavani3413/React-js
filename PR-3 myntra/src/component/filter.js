const category = () => [
    { id: 1, name: 'Men' },
    { id: 2, name: 'Women' },
    { id: 3, name: 'Boys' },
    { id: 4, name: 'Girls' },
];

const products = [
    {
        id: 1,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/27842148/2024/2/24/88f82c0f-f975-482f-a77a-7c4171f37cce1708776560975LuxCoziMenPoloCollarT-shirt1.jpg",
        category: "Men",
        price: 150
    },
    {
        id: 2,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/29808708/2024/5/25/e6170c05-b5ef-47d1-8d71-dd491ec099dd1716660445906ManiacMenPoloCollarPocketsSlimFitT-shirt1.jpg",
        category: "Men",
        price: 450
    },
    {
        id: 3,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/31598705/2025/2/20/fdfbd279-4e85-4890-b505-438e7ae4fe4d1740034331593-Mens-Causal-Tshirt-3471740034331143-1.jpg",
        category: "Men",
        price: 350
    },
    {
        id: 4,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/31826094/2024/12/4/1ec26aad-d135-4151-9262-33a25dff17301733318409999-Maniac-Men-Typography-Printed-T-shirt-8891733318409429-1.jpg",
        category: "Men",
        price: 199
    },
    {
        id: 5,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/33059713/2025/4/25/73fd1a91-acdd-47b5-b5e8-ac3adfdbbec81745594944752-ADRO-Men-Printed-Cotton-T-shirt-7731745594944240-1.jpg",
        category: "Men",
        price: 399
    },
    {
        id: 6,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/20/1icPFn5V_1c71a185856944aa9e4819294ab3ba73.jpg",
        category: "Women",
        price: 480
    },
    {
        id: 7,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/28090622/2024/3/7/01201be8-6327-44e4-90d2-25431cb0f7e51709805830993SlenorFloralPrintGeorgettePeplumTop1.jpg",
        category: "Women",
        price: 180
    },
    {
        id: 8,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14785506/2024/8/10/ee1e4c29-af86-41da-b06a-81fa051b3b271723279973637-FableStreet-LivIn-V-Neck-Regular-Top-1301723279973531-6.jpg",
        category: "Women",
        price: 160
    },
    {
        id: 9,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23952936/2023/7/10/eae8cb92-ce46-47b6-8850-8a778e6d8aac1688984551570InWeaveMaroonPrintTop1.jpg",
        category: "Women",
        price: 549
    },
    {
        id: 10,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/24674106/2023/8/26/8725d44c-bf4a-4c63-88b9-3290b31ec89e1693064512399DivenaMaroonFloralPrintMandarinCollarRoll-UpSleevesShirtStyl1.jpg",
        category: "Women",
        price: 499
    },
    {
        id: 11,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/31/tLmQLra1_c13e3592fba64f04924ca67e05a45414.jpg",
        category: "Boys",
        price: 199
    },
    {
        id: 12,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/35KFyDgJ_1987221c295b49f281b23faa061abef5.jpg",
        category: "Boys",
        price: 149
    },
    {
        id: 13,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/AUGUST/31/35KFyDgJ_1987221c295b49f281b23faa061abef5.jpg",
        category: "Boys",
        price: 399
    },
    {
        id: 14,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/6/ab7vgTCj_a3a43feb5ce94382b629e4305d0eb289.jpg",
        category: "Boys",
        price: 299
    },
    {
        id: 15,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/6/cC72Z0Ow_a6f2c8e36dd841ad9980dc5390609d62.jpg",
        category: "Boys",
        price: 249
    },
    {
        id: 16,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22745358/2023/4/12/358de66d-29f6-47f9-8469-3ff18bbc78be1681321867932SpunkiesGirlsCottonWhiteTshirt1.jpg",
        category: "Girls",
        price: 550
    },
    {
        id: 17,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/16/W8glbLsJ_0dac8a56bcb44218a7a2171a5a7fa8c9.jpg",
        category: "Girls",
        price: 199
    },
    {
        id: 18,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/13/Bsr5Floc_c3cfa57a4afa497f9b9ee90b751004e3.jpg",
        category: "Girls",
        price: 399
    },
    {
        id: 19,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/13/Bsr5Floc_c3cfa57a4afa497f9b9ee90b751004e3.jpg",
        category: "Girls",
        price: 289
    },
    {
        id: 20,
        image: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/29856525/2024/5/30/cd1e7a71-e3f5-4bc3-a980-c0d8d0230c971717072182564BAESDGirlsTypographyPrintedT-shirt1.jpg",
        category: "Girls",
        price: 175
    }
];

export { category, products };