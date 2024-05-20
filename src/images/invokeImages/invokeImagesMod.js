function invokeImage ([id, imgSrc]) {
    const plusIcon = document.getElementById(id);
    plusIcon.src = imgSrc;
}
export {invokeImage};