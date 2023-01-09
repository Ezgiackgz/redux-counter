import {useSelector ,useDispatch} from "react-redux";
import {setLanguage , setDarkMode} from "../stores/site";

function Footer (){
    const {dark,language} = useSelector((state)=>state.site);
    const languages = ["tr","en"];
    const dispatch = useDispatch();

    const handleLanguage = lang =>{
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            <div>
                {languages.map((lang,index)=>
                    <button onClick={()=>handleLanguage(lang)} className={lang === language ?"active" : ""} key={index}>{lang}</button>
                )}
            </div>
           <div>
               <button onClick={()=>dispatch(setDarkMode())}>
                   {dark ? "Light Moda Geç" : "Dark Moa Geç"}
               </button>
           </div>
        </div>
    )
}
export default Footer;