import {invokeDomContent} from "./indexDomContent";
import { invokeSideBarButton } from "../sideBar/sideBarButtonContent";
import { loadNotePage } from "../notePage/notePage";
import { invokeTopBarButton } from "./TopBar/topBarButton";
import "./index.css";
invokeDomContent();
invokeSideBarButton();
invokeTopBarButton();
const noteButton = document.getElementById('newNote');
noteButton.addEventListener('click',loadNotePage);