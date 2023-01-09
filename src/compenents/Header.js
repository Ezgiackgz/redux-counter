import {useSelector} from "react-redux";

function Header (){
const {dark,language} = useSelector((state)=>state.site)

    return (
        <div>
            Header
            <p>Mevcut Tema: {dark ? "Koyu" : "Açık"}</p>
            <div>
                <p>Site Dil {language}</p>Header.js
            </div>
        </div>
    )
}
export default Header;