// 資料填寫格式：先於最上方加入圖片資料'import 圖片名稱(英文) from 圖片路徑'
import pic1 from "@/assets/square_pic1.jpg";
import pic1_1 from "@/assets/vertical_pic1.jpg";
import pic1_2 from "@/assets/vertical_pic2.jpg";

// 再把加入的圖片資料放到這個陣列中
const dataSets = [
    { pic: pic1, pic1: pic1_1, pic2: pic1_2, text1: "方塊1文字1", text2: "方塊1文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊2文字1", text2: "方塊2文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊3文字1", text2: "方塊3文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊4文字1", text2: "方塊4文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊5文字1", text2: "方塊5文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊6文字1", text2: "方塊6文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊7文字1", text2: "方塊7文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊8文字1", text2: "方塊8文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊9文字1", text2: "方塊9文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊10文字1", text2: "方塊10文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊11文字1", text2: "方塊11文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊12文字1", text2: "方塊12文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊13文字1", text2: "方塊13文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊14文字1", text2: "方塊14文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊15文字1", text2: "方塊15文字2" },
    { pic: "", pic1: "", pic2: "", text1: "方塊16文字1", text2: "方塊16文字2" },
];

// 跑馬燈的文字
const marqueeText = "Text";

export { dataSets, marqueeText };
