import { invokeImage } from './invokeImagesMod';
import plus from '../plusIcon.png';
import calender from '../calenderIcon.png';
function invokeImages () {
    let images = [['plusicon', plus], ['upcomingIcon', calender]];
    images.forEach(invokeImage);
}
export {invokeImages};