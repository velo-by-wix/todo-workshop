import wixWindow from 'wix-window';

$w.onReady(function () {

    $w('#clearButton').onClick(() => {
        wixWindow.lightbox.close(true);
    });

    $w('#cancelButton').onClick(() => {
        wixWindow.lightbox.close(false);
    });

});