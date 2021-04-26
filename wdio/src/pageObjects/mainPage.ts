import {Header} from "../components/header";
import {MainInfoComponent} from "../components/mainInfoComponent";
import {SideMenu} from "../components/sideMenu";

export class MainPage{
    public static get header(){return new Header()}
    public static get mainInfoComponent(){return new MainInfoComponent()}
    public static get sideMenu(){return new SideMenu()}
}