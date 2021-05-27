import {Header} from "../components/header";
import {MainInfoComponent} from "../components/mainInfoComponent";
import {SideMenu} from "../components/sideMenu";
import {SearchPopUpComponent} from "../components/searchPopUpComponent";
import {BottomMenu} from "../components/bottomMenu";

export class MainPage{
    public static get header(){return new Header()}
    public static get mainInfoComponent(){return new MainInfoComponent()}
    public static get sideMenu(){return new SideMenu()}
    public static get searchPopUpComponent(){return new SearchPopUpComponent()}
    public static get bottomMenu(){return new BottomMenu()}
}