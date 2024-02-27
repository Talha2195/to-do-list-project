import {invokeDomContent} from "./indexDomContent";
import { invokeButtonDom } from "../sideBar/sideBarButtonContent";
import { loadNotePage } from "../notePage/notePage";
import "./index.css";
invokeDomContent();
invokeButtonDom();
const noteButton = document.getElementById('newNote');
noteButton.addEventListener('click',loadNotePage);