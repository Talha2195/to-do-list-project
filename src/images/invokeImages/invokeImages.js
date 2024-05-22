import { invokeImage } from './invokeImagesMod';
import plus from '../plusIcon.png';
import calender from '../upcomingIcon.png';
import home from '../homeIcon.png';
import search from '../searchIcon.png';
function invokeImages () {
    let images = [['plusicon', plus], 
    ['upcomingIcon', calender], 
    ['homeIcon', home],
    ['searchIcon', search]
];
    images.forEach(invokeImage);
}
export {invokeImages};