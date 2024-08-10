import {createContext, useState} from "react";
import Designsta from '../assets/Images/designsta.svg'
import Cloutexhibition from '../assets/Images/cloutexhibition.svg'
import CreativePhoto from '../assets/Images/creativePhoto.svg'
import KebabImg from '../assets/Images/kebab.png'

const Context = createContext()

const TokenContext = ({children}) =>  {
    const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
    const [postList, setPostList] = useState(JSON.parse(window.localStorage.getItem("postList")) ||[
        {
          id: 1,
          name: "Designsta",
          imgUrl: Designsta,
          email: "@inner · 25m",
          comment:
            "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
          commentCount: "10",
          replyCount: "1",
          likeCount: "8",
          uplode: null,
          statistic: null,
          postImg: null,
        },
        {
          id: 2,
          name: "cloutexhibition",
          imgUrl: Cloutexhibition,
          email: "@RajLahoti · 22m",
          comment:
            "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
          commentCount: null,
          replyCount: "5",
          likeCount: "9",
          uplode: null,
          statistic: null,
          postImg: null,
        },
        {
          id: 3,
          name: "CreativePhoto",
          imgUrl: CreativePhoto,
          email: "@cloutexhibition · 1h",
          comment: "Обетда..... Кечиринглар",
          commentCount: "10",
          replyCount: "1",
          likeCount: "8",
          uplode: null,
          statistic: null,
          postImg: KebabImg,
        },
      ]);
    window.localStorage.setItem("token" , JSON.stringify(token))
    window.localStorage.setItem("postList" , JSON.stringify(postList))
    return(
        <Context.Provider value={{token , setToken, postList, setPostList}}>{children}</Context.Provider>
    )
}

export {Context, TokenContext}