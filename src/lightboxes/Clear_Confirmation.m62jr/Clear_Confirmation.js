import wixWindow from 'wix-window';

$w.onReady(function () {
	//TODO: write your page related code here...
});

export function approveBtn_click(event) {
	wixWindow.lightbox.close(true)
}

export function rejectBtn_click(event) {
	wixWindow.lightbox.close(false)
}